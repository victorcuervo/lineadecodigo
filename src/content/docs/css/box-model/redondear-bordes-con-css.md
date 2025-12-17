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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WRD4BK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmXwY6RipgTBmoRRM2luw9pYNKKvxHP8XoCl8EKn4K%2FQIgHy3bJXRiTc14LVIt%2FhlzMlb17PIFqcrnTGeRqsUNsscqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3Dc%2FV4CZ5%2BNCaPfCrcA%2FtjAViq%2BTckkq6Q00SLqkndiLBa4eNbfuhvWZ%2FrYL6f9ntdZpQzFpDC9ezzfNFrRw%2BQmCOAraqix3Ora1hGOPA%2FcIi5mBGONSjgVJmWdqhk6r87DO1L%2FeSVno7X4hfxmnKiNIVcPj%2BdXaXEaq0xnKGL1oAHw%2Fu2ztFO2eBiW7ELE%2BUniPuXDgtjrpEh7reoZIa2unKx7LFB%2F6L9dvoHco26neMDwXySLw5Bndk574LJHDWI1uau1gEYJbXsKG%2FQPObrglLr4MYfrty3pIErlXH49DlY0P%2BSNUYI002NHo%2B%2FkTnxfz1x3CXZ0gVSB%2BjoiEW6y%2F2E3nHyCUI9D68GWWJQDSpULUOwsa6%2BoJzuWLKXDcIKSyKjoBT7X%2BOfvbRK2m5Z1s7U2pvoGOH7ZgvcnjPjin86Snb7jw848b03cAiu25ZpqtMx0HikTviTTdGlajk7IA3dn0svbQI5%2BFhTNRUxuMrqFyRxxyEN4fCE8aLDMJh1M2w4YleopGc9VBwl5kLvNp2KN45nxwM0wGedpNZBTes30XVW39aXBNP5BMrJesVBRVXwuRSLBChPh8%2BOzMfV1CZ%2F5sDzl%2FuQBjIJyhV30RG3spl9wHgau0PAkJsu%2F21fGy%2FewnnJ42rEMNiBi8oGOqUBibK0urXb4%2ByjJUVEt7Savpwitt6RMcH7JS8W74h0FluQ8pMJPzg2wa8hKaxZL%2BWmiMpS1gCr3sae9nFmK%2F8XGIXEWSsNCReMJNLz%2FkJN1T5EDl49nHfkcUVTCjXyr5o3SrJ1Yf%2FbXF%2FaEn9MbswVCJ3yThv8vGcWWCtkUSvFUCg8OfVr4mtA3NDgp5Md9X%2BmbxxMVF6miMRs7Bn048ftwSIGMWBc&X-Amz-Signature=437cc92769edc22328653f0f3d32457f8e8bea72c777163ac8d419112b187368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WRD4BK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmXwY6RipgTBmoRRM2luw9pYNKKvxHP8XoCl8EKn4K%2FQIgHy3bJXRiTc14LVIt%2FhlzMlb17PIFqcrnTGeRqsUNsscqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3Dc%2FV4CZ5%2BNCaPfCrcA%2FtjAViq%2BTckkq6Q00SLqkndiLBa4eNbfuhvWZ%2FrYL6f9ntdZpQzFpDC9ezzfNFrRw%2BQmCOAraqix3Ora1hGOPA%2FcIi5mBGONSjgVJmWdqhk6r87DO1L%2FeSVno7X4hfxmnKiNIVcPj%2BdXaXEaq0xnKGL1oAHw%2Fu2ztFO2eBiW7ELE%2BUniPuXDgtjrpEh7reoZIa2unKx7LFB%2F6L9dvoHco26neMDwXySLw5Bndk574LJHDWI1uau1gEYJbXsKG%2FQPObrglLr4MYfrty3pIErlXH49DlY0P%2BSNUYI002NHo%2B%2FkTnxfz1x3CXZ0gVSB%2BjoiEW6y%2F2E3nHyCUI9D68GWWJQDSpULUOwsa6%2BoJzuWLKXDcIKSyKjoBT7X%2BOfvbRK2m5Z1s7U2pvoGOH7ZgvcnjPjin86Snb7jw848b03cAiu25ZpqtMx0HikTviTTdGlajk7IA3dn0svbQI5%2BFhTNRUxuMrqFyRxxyEN4fCE8aLDMJh1M2w4YleopGc9VBwl5kLvNp2KN45nxwM0wGedpNZBTes30XVW39aXBNP5BMrJesVBRVXwuRSLBChPh8%2BOzMfV1CZ%2F5sDzl%2FuQBjIJyhV30RG3spl9wHgau0PAkJsu%2F21fGy%2FewnnJ42rEMNiBi8oGOqUBibK0urXb4%2ByjJUVEt7Savpwitt6RMcH7JS8W74h0FluQ8pMJPzg2wa8hKaxZL%2BWmiMpS1gCr3sae9nFmK%2F8XGIXEWSsNCReMJNLz%2FkJN1T5EDl49nHfkcUVTCjXyr5o3SrJ1Yf%2FbXF%2FaEn9MbswVCJ3yThv8vGcWWCtkUSvFUCg8OfVr4mtA3NDgp5Md9X%2BmbxxMVF6miMRs7Bn048ftwSIGMWBc&X-Amz-Signature=f4470e0452f5eed2c8502cd6c759b34da5a716818b918784618a5b96fd0ba1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
