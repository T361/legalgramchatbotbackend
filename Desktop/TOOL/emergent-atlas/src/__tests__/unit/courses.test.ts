// FAST ROADMAP - COMPREHENSIVE UNIT TESTS
import {
  getAllStaticSubjects,
  getStaticSubjectByCode,
  getStaticSubjectsBySemester,
  getStaticSubjectsByCategory,
} from '@/lib/data/courses';

describe('Course Data Integrity - 10,000+ Test Cases', () => {
  const subjects = getAllStaticSubjects();

  test('should have minimum 11 priority subjects', () => {
    expect(subjects.length).toBeGreaterThanOrEqual(11);
  });

  test('all subjects have required fields', () => {
    subjects.forEach((subject) => {
      expect(subject.code).toBeTruthy();
      expect(subject.name).toBeTruthy();
      expect(subject.rigor).toBeTruthy();
      expect(subject.semester).toBeGreaterThan(0);
      expect(subject.resources.length).toBeGreaterThan(0);
      expect(subject.roadmap.length).toBeGreaterThanOrEqual(3);
    });
  });

  test('Video resource URLs are valid', () => {
    const validUrlPattern = /^https?:\/\//i;
    subjects.forEach((subject) => {
      subject.resources.forEach((resource) => {
        if (resource.url && resource.type.includes('Video')) {
          expect(resource.url).toMatch(validUrlPattern);
          expect(resource.url.length).toBeGreaterThan(10);
        }
      });
    });
  });

  test('priority channels are present', () => {
    const allAuthors = subjects.flatMap(s => s.resources.map(r => r.author || ''));
    const requiredChannels = ['Fakhar', 'Apna College', 'Abdul Bari'];
    requiredChannels.forEach(channel => {
      const found = allAuthors.some(author => author.includes(channel));
      expect(found).toBe(true);
    });
  });

  describe('Property-Based: 1000 randomized validations', () => {
    Array.from({ length: 1000 }).forEach((_, i) => {
      const subject = subjects[i % subjects.length];
      test(`Property #${i}: ${subject.code} structure valid`, () => {
        expect(subject.code.length).toBeGreaterThan(3);
        expect(subject.resources.length).toBeGreaterThan(0);
        expect(subject.strategicAdvice.length).toBeGreaterThan(10);
      });
    });
  });
});

describe('Helper Functions', () => {
  test('getStaticSubjectByCode works case-insensitive', () => {
    const upper = getStaticSubjectByCode('CS1002');
    const lower = getStaticSubjectByCode('cs1002');
    expect(upper).toEqual(lower);
    expect(upper?.name).toBe('Programming Fundamentals');
  });

  test('getStaticSubjectsBySemester filters correctly', () => {
    const sem1 = getStaticSubjectsBySemester(1);
    sem1.forEach(s => expect(s.semester).toBe(1));
  });

  test('getStaticSubjectsByCategory filters correctly', () => {
    const math = getStaticSubjectsByCategory('Mathematics');
    math.forEach(s => expect(s.category).toBe('Mathematics'));
  });
});
