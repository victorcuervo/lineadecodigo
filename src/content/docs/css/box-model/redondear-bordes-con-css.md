---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3MNT2M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPvoSYAEPGsXKV5xr6CUyKz5%2BQKtlBVkp8YD5uHoGFcAiEAzGTGXPlx%2BHuCQqMN1H%2Bn8KpTDhIqqr8ucvV9CDOcq0Iq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBr6XqRYcVcCWmhibCrcAyx8%2FYuff7lh1XisyX22iGgCwRyBW2cpMD5MNYCfAoo1wuNh%2FnoEWhHcMQ0ASXjHJKpa5w9abUj6p4Ehx6FRiYz8Fut%2Fe6teTDnRSiRMPmTUxB8DWeCMW4VgXIiWzP3qSGxGU8GHCwNpBr%2FBpDP%2B4oTRpEcyTwWQA6cKLSBBL7A02x%2BTPPy1BebywqzzskhWF%2FVtaTBz4ICv6USdVQm%2FrOg%2FB%2F5kv3w%2FFs%2BQATcwUf7WP8Za2dmak5EJTw47Po5qbrM%2FHudPIvI6WJTpzNSTv82QZ0T55b3BBUoyjozohSnDaa24RVQE%2BBi1Bhet5tzx%2BoilTG62EKURuzf%2BkHPzyAGlvRe20NOYiN6wiVz3z2RPK1lhTUju5GRaJQaWjheM5uJo7o1guC4hkucAI7bZDU43ntqYsGwMDaa4poNnx3AYBIxNmzjbnHshWEsxOnmwfkiNTRSy4EyRyCNrTS3t6OmOQaxJVZZk7LfgudxAJ5hsFZUfG8tjYZ233QRR90ZRLusTj%2F2WlSFqJVR3KtYGdJy1aw1hlF%2BTDsm4NAIdewurDNyHnvZuIEaCUSy%2BBofZUCN3KdhoPD0pPUb4W9JoMOd%2BX9sCVs5c9Q56Pcj1Csd%2BDknk%2BxqqKjzXBYhMMP%2BOisoGOqUBQnPHBBEEHEuqkRWzb2eny%2BwS0uEmCkra9rF1BoBBrFB8tkstDQw8FJcZnJpesxMl9u2K5PQ6UJkqRWol%2FHt58fQ5zeHKbdCg282lMMGY6JwQGsVe2bmBTqSBz1LwM6p4NhjY%2BkFbe7J%2BkChbP3Bfzi1I3W7hhCrrxTJ0OuoXa27Q3SQDOKuNRxhZP0w7hF3xlO0X6ZN7QwvAAe7RV5KizqtvMtn%2F&X-Amz-Signature=b8378160d20b31d95b262aee4ccf062b7a6b7319e88de26b224d4fec52a03cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3MNT2M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPvoSYAEPGsXKV5xr6CUyKz5%2BQKtlBVkp8YD5uHoGFcAiEAzGTGXPlx%2BHuCQqMN1H%2Bn8KpTDhIqqr8ucvV9CDOcq0Iq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBr6XqRYcVcCWmhibCrcAyx8%2FYuff7lh1XisyX22iGgCwRyBW2cpMD5MNYCfAoo1wuNh%2FnoEWhHcMQ0ASXjHJKpa5w9abUj6p4Ehx6FRiYz8Fut%2Fe6teTDnRSiRMPmTUxB8DWeCMW4VgXIiWzP3qSGxGU8GHCwNpBr%2FBpDP%2B4oTRpEcyTwWQA6cKLSBBL7A02x%2BTPPy1BebywqzzskhWF%2FVtaTBz4ICv6USdVQm%2FrOg%2FB%2F5kv3w%2FFs%2BQATcwUf7WP8Za2dmak5EJTw47Po5qbrM%2FHudPIvI6WJTpzNSTv82QZ0T55b3BBUoyjozohSnDaa24RVQE%2BBi1Bhet5tzx%2BoilTG62EKURuzf%2BkHPzyAGlvRe20NOYiN6wiVz3z2RPK1lhTUju5GRaJQaWjheM5uJo7o1guC4hkucAI7bZDU43ntqYsGwMDaa4poNnx3AYBIxNmzjbnHshWEsxOnmwfkiNTRSy4EyRyCNrTS3t6OmOQaxJVZZk7LfgudxAJ5hsFZUfG8tjYZ233QRR90ZRLusTj%2F2WlSFqJVR3KtYGdJy1aw1hlF%2BTDsm4NAIdewurDNyHnvZuIEaCUSy%2BBofZUCN3KdhoPD0pPUb4W9JoMOd%2BX9sCVs5c9Q56Pcj1Csd%2BDknk%2BxqqKjzXBYhMMP%2BOisoGOqUBQnPHBBEEHEuqkRWzb2eny%2BwS0uEmCkra9rF1BoBBrFB8tkstDQw8FJcZnJpesxMl9u2K5PQ6UJkqRWol%2FHt58fQ5zeHKbdCg282lMMGY6JwQGsVe2bmBTqSBz1LwM6p4NhjY%2BkFbe7J%2BkChbP3Bfzi1I3W7hhCrrxTJ0OuoXa27Q3SQDOKuNRxhZP0w7hF3xlO0X6ZN7QwvAAe7RV5KizqtvMtn%2F&X-Amz-Signature=13a9d248dd3830b7b22aa0c8df8804ee8f219ce43efcc297e6008a27cd926e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
