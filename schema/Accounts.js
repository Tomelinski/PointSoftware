{
    User:
        id: Uuid index
        firstName: String
        lastName: String
        username: String
        password: (hash) String
},
{
    Accounts:
        id: Uuid index
        user_id: Reference
        account_balance: Float
},
{
    transactions: 
        id: Uuid
}

DROP Table if Exists
Create User table