import React from 'react';
import { render } from '@testing-library/react';
import GlobalStyle from './App'; // 假設 GlobalStyle 定義在 App 中

describe('GlobalStyle', () => {
  test('applies global styles correctly', () => {
    const { container } = render(
      <>
        <GlobalStyle />
        <div data-testid="test-element">Test</div>
      </>
    );

    // 確保樣式正確應用
    expect(container.firstChild).toMatchSnapshot();
  });
});

// 僅針對特定警告靜音
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((message) => {
    if (
      message.includes('React does not recognize the') || // React 的 DOM 屬性警告
      message.includes('React Router Future Flag Warning') // React Router 的未來相容性提醒
    ) {
      return; // 靜音這些已知警告
    }
    console.error(message); // 保留其他錯誤
  });

  jest.spyOn(console, 'warn').mockImplementation((message) => {
    if (
      message.includes('Relative route resolution') // React Router 路由相容性警告
    ) {
      return; // 靜音特定警告
    }
    console.warn(message); // 保留其他警告
  });
});

afterAll(() => {
  console.error.mockRestore();
  console.warn.mockRestore();
});
