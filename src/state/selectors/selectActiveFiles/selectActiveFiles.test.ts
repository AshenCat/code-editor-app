import { RootState } from '../../store'
import selectActiveFiles from './selectActiveFiles';

test('should return only the active files', () => {
    const userFiles = [
        {
            id: '1',
            name: 'index.js',
            relativePath: 'test/index1.js',
            code: 'console.log("Hello world")',
            extension: 'js',
        },
        {
            id: '2',
            name: 'index.js',
            relativePath: 'test/index2.js',
            code: 'console.log("Hello world")',
            extension: 'js',
        },
        {
            id: '3',
            name: 'index.js',
            relativePath: 'test/index3.js',
            code: 'console.log("Hello world")',
            extension: 'js',
        },
    ];
    const activeFiles = ['1', '3'];
    const state = {
        files: {
            userFiles,
            activeFiles
        }
    } as RootState;
    const expectedResult = [
        {
            id: '1',
            name: 'index.js',
            relativePath: 'test/index1.js',
            code: 'console.log("Hello world")',
            extension: 'js',
        },
        {
            id: '3',
            name: 'index.js',
            relativePath: 'test/index3.js',
            code: 'console.log("Hello world")',
            extension: 'js',
        },
    ];
    expect(selectActiveFiles(state)).toEqual(expectedResult)
})