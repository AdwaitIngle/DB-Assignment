Answers -->

1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

-> From the given figure, the relationship between "Product" and "Product_Category" is one-to-many. In other words, one product can belong to many categories, but a category can have many products. This relationship is represented by a foreign key in the "Product" table. Foreign key column refers to the primary key of another table.  In this case, the “Product” table has a column called “category_id” that references the primary key of the “Product_Category” table.

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

-> There are database constraints which ensure the table with valid category. For example, a foreign key constraint as per the given diagram which can be set to several restrictions before applying changes, a check constraint which limits the allowed values for column and rows. 
We can apply logic for validation of data on sevral protocols or set of rules. It checks and selects the existing category for the data for validation. Again we can set any data as a default category if any data don't have specific category then it will be open for default.

Consider the given data in the diagram -

Foreign Key Constraint: The "Product" table likely has a foreign key referencing the "Product_Category" table. This foreign key constraint can be set to ON DELETE RESTRICT in the database. This prevents deleting a category from the "Product_Category" table if products are still assigned to it. It enforces data integrity and avoids orphaned product entries with non-existent category IDs.

Check Constraint:  A check constraint can be added to the "category_id" column in the "Product" table.  This constraint would limit the allowed values for the column to existing IDs in the "Product_Category" table. This approach ensures new products are assigned valid categories during insert operations.

Validation Rules:  When adding or editing products in the application, implement validation rules that check if the selected category exists in the "Product_Category" table. This can be done through code before saving the product data.

Default Category: Define a default category (e.g., "Uncategorized") in the "Product_Category" table. If a product is added without a specific category selected, assign it the default category.  This prevents products from being completely missing a category assignment, although it might require a later update to a more specific category.

3. Create schema in any Database script or any ORM (Object Relational Mapping).

-> Uploaded in repository with attached file of schema.js consisting of small schema.