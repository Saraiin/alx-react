import { getFullYear, getFooterCopy } from '../../../task_1/dashboard/src/utils';
import { getLatestNotification } from '../../../task_3/dashboard/src/utils';


// Test for getFullYear
test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear)
});


// Test for getFooterCopy
test('getFooterCopy returns the correct string for true', () => {
    const result = getFooterCopy(true);
    expect(result).toEqual('Holberton school');
})

test('getFooterCopy returns the correct string for false', () => {
    const result = getFooterCopy(false);
    expect(result).toEqual('Holberton School main dashboard');
})


// Test for getLatestNotification
test('getLatestNotification returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    const result = getLatestNotification();
    expect(result).toEqual(expectedString);
})
