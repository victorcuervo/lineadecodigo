---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYO4RIPF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdwbVKsNpxPgcoFd%2Ffk1m17Ft2v2XudIvDLol6IgbqtwIgRQfy9PIndGNkm1RAgJPRzjBlaoG%2F6F4VmdGX0FhJOe4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDeXEJPYzsSiBtUM2SrcAzcoe2F3zk0UlCDs1ltxEkdCghVY%2FL4P2A%2FiNZ9g%2BD3zVFQwhk%2BtxxDVlfcrv%2BuGHL7qwFA1xBJyPcw%2B9yKWv3clo%2BR8ywi24WLJBmFIFbBYDiur94bevIV1lNu9iCKkcmdgZRuKiVBd4yO8AbJ0DOuHrm6H2%2FOSt3LwD%2FsyEgyyPg9KECSyC%2FE5hTwlXGDGUkfkjtu8JFgIWu2tsDOQ1avoTHdzuU4wLb%2B9WPgCfNM86Nro%2F9QYns9AQPiNaGOz%2Fj2xjggK5aLzXHvK5ja1MrScsAnsuhcXxTR7khtZzpVmK4XQyXuJYvv0R3mWElBnKuJHtHDf3IOr1aadE%2FflonhSquuhhGgquhHMoQLz%2FIwGp2jkC8UKPsf5lsKhmE66bOAPp5A06FZF7tcXMV4wJ7NO0t%2Fk0lJ3%2BKzcyIFM0lBj30v%2FOzKgTVxAWMWeTcibf23LjnVj02q%2FpB21PBUNMZiypythMe1R7H6dWIxzHEZP9jDlb2WV62J2E5EjuHBRd%2BPHwa%2FMZqdO6TGubchY8DmH1HDEyIDEV%2FjgBPpxCs3Yo1QVO15fHvL8X2fi48RTyyuQbBBlbCQT7Bt6754gFJ9GaiPobmFxgL%2BdfLnSYxf7ogqvGugPzpjKiCErMP2vyckGOqUBc6MGvsvvI1d%2BOnTxeMIzXuCO0wlNpsGS2RmSqnn1v7fbKhFzuurubRVpO1mn7CmHu5q%2FDwSv10N8p5PRobHKou7SBkkMOjkxsUruw6Lw1PuR%2F%2BXNKCLWRMC%2BfA3%2BHuInV0D%2FafIOytjqPnAjg1Q%2Fv9Nn3P7zcehAntB6M8Hk9gkLawNlmr1yNUD2JvhxjRUvpB0br1Tyrm8hzVToCOfl2ekFF2sS&X-Amz-Signature=8834afd195a8a56ac31c0ff8e1eada9ebca47a4568f530a197e6c172af613fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYO4RIPF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdwbVKsNpxPgcoFd%2Ffk1m17Ft2v2XudIvDLol6IgbqtwIgRQfy9PIndGNkm1RAgJPRzjBlaoG%2F6F4VmdGX0FhJOe4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDeXEJPYzsSiBtUM2SrcAzcoe2F3zk0UlCDs1ltxEkdCghVY%2FL4P2A%2FiNZ9g%2BD3zVFQwhk%2BtxxDVlfcrv%2BuGHL7qwFA1xBJyPcw%2B9yKWv3clo%2BR8ywi24WLJBmFIFbBYDiur94bevIV1lNu9iCKkcmdgZRuKiVBd4yO8AbJ0DOuHrm6H2%2FOSt3LwD%2FsyEgyyPg9KECSyC%2FE5hTwlXGDGUkfkjtu8JFgIWu2tsDOQ1avoTHdzuU4wLb%2B9WPgCfNM86Nro%2F9QYns9AQPiNaGOz%2Fj2xjggK5aLzXHvK5ja1MrScsAnsuhcXxTR7khtZzpVmK4XQyXuJYvv0R3mWElBnKuJHtHDf3IOr1aadE%2FflonhSquuhhGgquhHMoQLz%2FIwGp2jkC8UKPsf5lsKhmE66bOAPp5A06FZF7tcXMV4wJ7NO0t%2Fk0lJ3%2BKzcyIFM0lBj30v%2FOzKgTVxAWMWeTcibf23LjnVj02q%2FpB21PBUNMZiypythMe1R7H6dWIxzHEZP9jDlb2WV62J2E5EjuHBRd%2BPHwa%2FMZqdO6TGubchY8DmH1HDEyIDEV%2FjgBPpxCs3Yo1QVO15fHvL8X2fi48RTyyuQbBBlbCQT7Bt6754gFJ9GaiPobmFxgL%2BdfLnSYxf7ogqvGugPzpjKiCErMP2vyckGOqUBc6MGvsvvI1d%2BOnTxeMIzXuCO0wlNpsGS2RmSqnn1v7fbKhFzuurubRVpO1mn7CmHu5q%2FDwSv10N8p5PRobHKou7SBkkMOjkxsUruw6Lw1PuR%2F%2BXNKCLWRMC%2BfA3%2BHuInV0D%2FafIOytjqPnAjg1Q%2Fv9Nn3P7zcehAntB6M8Hk9gkLawNlmr1yNUD2JvhxjRUvpB0br1Tyrm8hzVToCOfl2ekFF2sS&X-Amz-Signature=a46cd60ebe0a4fe3c96a35a7a82d395860d7ad27233daf354a25aaaa41301fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
