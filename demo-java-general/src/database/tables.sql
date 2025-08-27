CREATE TABLE public."persona"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    name character varying(50) NOT NULL,
    year bigint NOT NULL,
    email character varying(50) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public."persona"
    OWNER to postgres;

INSERT INTO public.persona(
	 name, year, email)
	VALUES ('postgres', 1,'postgres@postgres.com');