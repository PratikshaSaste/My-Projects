#include <stdio.h>
#include <string.h>

void isPalindrome(char str[]);

int main()
{
  	char str[100];

  	printf("\n Please Enter any String :  ");
  	gets(str);

  	isPalindrome(str);

  	return 0;
}

void isPalindrome(char str[])
{
	int i = 0;
	int len = strlen(str) - 1;

	while (len > i)
	{
		if(str[i++] != str[len--])
		{
			printf("\n %s is Not a Palindrome String", str);
			return;
		}
	}
	printf("\n %s is a Palindrome String", str);
}
