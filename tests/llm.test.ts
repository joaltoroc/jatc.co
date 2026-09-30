import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

describe('Public LLM Context Files', () => {
  const rootDir = process.cwd();
  const llmPath = path.join(rootDir, 'public', 'llm.txt');
  const llmsPath = path.join(rootDir, 'public', 'llms.txt');

  it('should verify that llm.txt and llms.txt exist', () => {
    expect(fs.existsSync(llmPath)).toBe(true);
    expect(fs.existsSync(llmsPath)).toBe(true);
  });

  it('should keep llm.txt and llms.txt identical in content', () => {
    const llmContent = fs.readFileSync(llmPath, 'utf-8');
    const llmsContent = fs.readFileSync(llmsPath, 'utf-8');
    expect(llmContent).toBe(llmsContent);
  });

  it('should contain the updated company Banco Contactar for Development Manager', () => {
    const content = fs.readFileSync(llmPath, 'utf-8');
    expect(content).toContain('Banco Contactar');
    expect(content).toContain('Development Manager');
  });
});
