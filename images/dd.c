#include <stdio.h>
#include <string.h>
struct Candidate
{
    char name[50];
    int votes;
};
void vote(struct Candidate candidates[], int numCandidates)
{
    int choice;
    printf("Candidates:\n");
    for (int i = 0; i < numCandidates; ++i)
    {
        printf("%d. %s\n", i + 1, candidates[i].name);
    }
    printf("Enter your vote (1-%d): ", numCandidates);
    scanf("%d", &choice);

    if (choice >= 1 && choice <= numCandidates)
    {
        candidates[choice - 1].votes++;
        printf("You have voted for %s.\n", candidates[choice - 1].name);
    }
    else
    {
        printf("Invalid choice.\n");
    }
}
int main()
{
    struct Candidate candidates[5]; // Assuming a maximum of 5 candidates
    int numCandidates;

    printf("Enter the number of candidates: ");
    scanf("%d", &numCandidates);

    if (numCandidates <= 0 || numCandidates > 5)
    {
        printf("Invalid number of candidates. Please choose between 1 and 5.\n");
        return 1;
    }

    for (int i = 0; i < numCandidates; ++i)
    {
        printf("Enter name of candidate %d: ", i + 1);
        scanf("%s", candidates[i].name);
        candidates[i].votes = 0;
    }

    int voters;
    printf("Enter the number of voters: ");
    scanf("%d", &voters);

    for (int i = 0; i < voters; ++i)
    {
        printf("Voter %d:\n", i + 1);
        vote(candidates, numCandidates);
    }

    printf("Voting Results:\n");
    for (int i = 0; i < numCandidates; ++i)
    {
        printf("%s: %d votes\n", candidates[i].name, candidates[i].votes);
    }

    return 0;
}