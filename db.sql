--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: meals_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl_1121_13
--

CREATE SEQUENCE public.meals_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.meals_id_seq OWNER TO tpl_1121_13;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: meals; Type: TABLE; Schema: public; Owner: tpl_1121_13
--

CREATE TABLE public.meals (
    id integer DEFAULT nextval('public.meals_id_seq'::regclass) NOT NULL,
    addedon date DEFAULT CURRENT_DATE NOT NULL,
    foodeaten character varying(255) NOT NULL,
    calories numeric NOT NULL,
    mealcourse character varying(255) NOT NULL,
    userid integer
);


ALTER TABLE public.meals OWNER TO tpl_1121_13;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl_1121_13
--

CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO tpl_1121_13;

--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl_1121_13
--

CREATE TABLE public.users (
    id integer DEFAULT nextval('public.user_id_seq'::regclass) NOT NULL,
    name character varying(255),
    email character varying(255) NOT NULL,
    nickname character varying(255),
    created timestamp with time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO tpl_1121_13;

--
-- Data for Name: meals; Type: TABLE DATA; Schema: public; Owner: tpl_1121_13
--

COPY public.meals (id, addedon, foodeaten, calories, mealcourse, userid) FROM stdin;
3	2022-05-06	pizza	262.9	Lunch	6
4	2022-05-06	eggs	144.3	Breakfast	6
5	2022-05-06	steak	273.4	Dinner	6
6	2022-05-06	pretzels	389.1	Snacks	6
7	2022-05-06	cheeseburger	275.8	Lunch	7
8	2022-05-06	spaghetti	154.1	Dinner	7
9	2022-05-06	bagel	256.6	Breakfast	8
10	2022-05-06	chips	540.8	Snacks	9
11	2022-05-08	cheeseburger	275.8	Lunch	6
12	2022-05-02	cereal	376	Breakfast	6
13	2022-05-03	chicken nuggets	313.4	Lunch	6
14	2022-05-09	eggs	144.3	Breakfast	7
15	2022-05-09	pizza	262.9	Lunch	7
16	2022-05-09	chicken alfredo	256.9	Lunch	6
17	2022-05-09	egss	144.3	Breakfast	6
18	2022-05-09	pineapple	50.8	Snacks	6
19	2022-05-11	toast	298.3	Breakfast	6
20	2022-05-11	penne pasta	159	Lunch	6
21	2022-05-11	corn dog	260	Dinner	6
22	2022-05-11	cheesecake	314	Snacks	6
30	2022-05-11	pizza	262.9		\N
31	2022-05-11	pizza	262.9		\N
32	2022-05-11	pizza	262.9		\N
33	2022-05-11	pizza	262.9		\N
34	2022-05-12	eggs	144.3	Breakfast	6
35	2022-05-12	toast	298.3	Breakfast	6
36	2022-05-12	cheeseburger	275.8	Lunch	6
40	2022-05-12	pizza	262.9		\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl_1121_13
--

COPY public.users (id, name, email, nickname, created) FROM stdin;
6	Kisha M	mimsn.denise@gmail.com	mimsn.denise	2022-05-05 20:28:50.391215-05
7	Megan	mjones@gmail.com	megan.lisa	2022-05-06 14:18:17.465606-05
8	John	john.fever@gmail.com	johnny.mark	2022-05-06 14:19:04.642512-05
9	Logan	log456@gmail.com	Legon	2022-05-06 14:19:32.107896-05
\.


--
-- Name: meals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl_1121_13
--

SELECT pg_catalog.setval('public.meals_id_seq', 42, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl_1121_13
--

SELECT pg_catalog.setval('public.user_id_seq', 9, true);


--
-- Name: meals meals_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl_1121_13
--

ALTER TABLE ONLY public.meals
    ADD CONSTRAINT meals_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: tpl_1121_13
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl_1121_13
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: meals user_id; Type: FK CONSTRAINT; Schema: public; Owner: tpl_1121_13
--

ALTER TABLE ONLY public.meals
    ADD CONSTRAINT user_id FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

