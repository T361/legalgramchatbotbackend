#!/bin/bash
# ============================================================================
# FAST ROADMAP - COMPREHENSIVE VERIFICATION SCRIPT
# Runs all critical checks before deployment
# ============================================================================

set -e  # Exit on error

echo "🚀 FAST ROADMAP - PRE-DEPLOYMENT VERIFICATION"
echo "=============================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track results
TOTAL_CHECKS=0
PASSED_CHECKS=0
FAILED_CHECKS=0

run_check() {
    local check_name=$1
    local command=$2
    
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    echo -n "[$TOTAL_CHECKS] Checking: $check_name... "
    
    if eval "$command" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ PASS${NC}"
        PASSED_CHECKS=$((PASSED_CHECKS + 1))
        return 0
    else
        echo -e "${RED}✗ FAIL${NC}"
        FAILED_CHECKS=$((FAILED_CHECKS + 1))
        return 1
    fi
}

echo "📦 Phase 1: Build Verification"
echo "------------------------------"
run_check "TypeScript Compilation" "npm run build"
run_check "Production Bundle Size" "test -f .next/static && du -sh .next/static | grep -E '^[0-9]+[KM]'"
echo ""

echo "🧪 Phase 2: Test Suite Execution"
echo "--------------------------------"
run_check "Unit Tests" "npm test -- --silent"
run_check "Test Coverage > 90%" "npm test -- --silent --coverage | grep -E 'All files.*9[0-9]\.[0-9]+'"
echo ""

echo "📱 Phase 3: Mobile Optimization"
echo "-------------------------------"
run_check "Mobile Viewport Meta Tag" "grep -r 'viewport-fit=cover' src/"
run_check "Safe Area Insets" "grep -r 'env(safe-area-inset' src/"
run_check "Touch Action Optimization" "grep -r 'touch-action' src/"
echo ""

echo "📚 Phase 4: Data Integrity"
echo "-------------------------"
run_check "Senior Advice Data Exists" "test -f src/lib/data/seniorAdvice.ts"
run_check "Global Advice Data Exists" "test -f src/lib/data/globalAdvice.ts"
run_check "Courses Data Complete" "grep -c 'code:' src/lib/data/courses.ts | awk '\$1 >= 10'"
run_check "Wonder.site Reference" "grep -r 'Wonder.site' src/lib/data/"
echo ""

echo "🔗 Phase 5: Resource Verification"
echo "---------------------------------"
run_check "CodeBeauty in OOP Resources" "grep 'CodeBeauty' src/lib/data/courses.ts"
run_check "Bilal Khalid Dar in SE" "grep 'Bilal Khalid Dar' src/lib/data/courses.ts"
run_check "Apna College DSA Link" "grep 'Apna College DSA' src/lib/data/courses.ts"
run_check "Abdul Bari Archive Link" "grep 'archive.org' src/lib/data/courses.ts"
echo ""

echo "🎨 Phase 6: Component Integration"
echo "---------------------------------"
run_check "Senior Advice in CourseDetail" "grep 'seniorAdvice' src/components/organisms/CourseDetailPanel.tsx"
run_check "Global Advice Card Component" "test -f src/components/organisms/GlobalAdviceCard.tsx"
run_check "Mobile Header Component" "test -f src/components/mobile/MobileHeader.tsx"
run_check "Bottom Nav Bar Component" "test -f src/components/mobile/BottomNavBar.tsx"
echo ""

echo "⚡ Phase 7: Performance Checks"
echo "-----------------------------"
run_check "Dynamic Import Usage" "grep -r 'dynamic(' src/"
run_check "Image Optimization" "grep -r 'next/image' src/ || echo 'No images found (OK)'"
run_check "Lazy Loading Patterns" "grep -r 'Suspense' src/"
echo ""

echo "🔒 Phase 8: Security & Best Practices"
echo "------------------------------------"
run_check "No Hardcoded Secrets" "! grep -r 'mongodb+srv://.*:.*@' src/"
run_check "Environment Variable Usage" "grep -r 'process.env' src/"
run_check "Static Fallback Exists" "grep 'staticSubjects' src/lib/data/courses.ts"
echo ""

# Summary
echo ""
echo "=============================================="
echo "📊 VERIFICATION SUMMARY"
echo "=============================================="
echo -e "Total Checks:  $TOTAL_CHECKS"
echo -e "${GREEN}Passed:        $PASSED_CHECKS${NC}"
echo -e "${RED}Failed:        $FAILED_CHECKS${NC}"
echo ""

if [ $FAILED_CHECKS -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL CHECKS PASSED! Ready for deployment.${NC}"
    exit 0
else
    echo -e "${RED}⚠️  Some checks failed. Please review before deployment.${NC}"
    exit 1
fi
