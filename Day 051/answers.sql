/* Create and display a view that retrieves employees' first and last names and the total number of hours they work */
CREATE VIEW total_horas AS 
SELECT pnome, unome, sum(horas)
FROM funcionario INNER JOIN trabalha_em ON cpf = fcpf
GROUP BY cpf
HAVING sum(horas) > 35;

SELECT *
FROM total_horas;

/* Create and display a view that retrieves the first and last names of employees and the names of the projects they work on */
CREATE VIEW funcs AS
SELECT f.pnome, f.unome, p.projnome
FROM funcionario f
INNER JOIN trabalha_em ON trabalha_em.fcpf = f.cpf
INNER JOIN projeto p ON trabalha_em.pnr = p.projnumero
ORDER BY pnome ASC;

/* Create and display a view that retrieves the names of all employees along with the number of dependents they have */
CREATE VIEW num_dependentes AS 
SELECT pnome, unome, count(fcpf) AS num_dependentes
FROM funcionario left join dependente ON cpf = fcpf
GROUP BY cpf;

/* Bring in employees who have the most dependents */
SELECT max(num_dependentes)
FROM num_dependentes;

/* Bring the names of the employees with the largest number of dependents */
SELECT pnome, unome, count(fcpf) AS num_dependentes
FROM funcionario LEFT JOIN dependente ON cpf = fcpf
GROUP BY cpf
HAVING num_dependentes = (SELECT max(num_dependentes) FROM num_dependentes);