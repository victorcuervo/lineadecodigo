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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64IY4LW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3Tw44OZZLhKrdl2v7dwd%2BJSGopoUR8JelIsAGuQ%2Bv8AiBM9qL2w539Ar3p6b3Wjfg2HXWlf3bdCoAsw5SGxs%2FLwiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzOpVE6sUXao%2FFDTHKtwDPi%2B6%2Bpfo%2BRMptgzR7PGoqL5jGpd5YYXb9I6R%2BfKxoTZvw139Ha4t%2FizQuIjs1PAz%2Bg%2FB2CnxB0mUd2WiqlnvGtMFbSmoNtephQ6Jv68Nw5v0M9UMEpgRbVUujVkZlG1FE46m3K9MawiLdwxQVBVpcuX5YJvhODs7eapUt7uZE%2Fl%2FJRPIlGuIjt1mdLkoldhMZtZqUlQ6Sey%2BhNbVaxyhtQilpUevrWR8b6SVGGaQELupAnsnVtTYflGwYp7RXI7Kdk8w1aun3kVTA1d3svc%2B3FTfDONL2qErx6muDJ%2BoS7QeZbs6JmuonG5iQ8FTaIhkDkXOH7X%2FVQXf%2FMpOlAv0WJRJVFxSbS8HF%2BnSNDINprQKdnxXBEJgiHQRJLIwpYOenKU5u8J91DjgzVyRbdVxESTVMnLIGx05zgMSEqf8EqoGpVIBRc58d5BMiUSJHM3Nbyie%2FikIBMssyho1Kft8%2Bgo2TPFWYYhlUhh0UBKgkwiyQxyL33DJXNjHUrkP9U0bTlXS1HTxz1NYcayc4sXGLwzy4%2BVPtG3O6CTOjMMRw%2FvS3UcpwvVewJDb1IZkLS4SGGqff7rt4Fq%2BF3flR53Q3%2BhLB1Aq6cnfUeItnuXQU15Vn4Hc09KXBkZrvUYw2qTfyQY6pgHkl5N9QL%2F18pVNQ%2FJPh1ViZRGh21u9TeSn8zJ7k9aoUuJVs7oPTwd3%2BzCt3AYTN7W0LfYX0ImD3mvuSP586mydzh8VN6FRlCI9w8C4f6PAb8m6ZdJNALdy4%2B7%2FffQ7SapWMOzz1oNdrNkD%2BYHxyTsPsW8sht4k%2FPtqpKuvMi%2BTUdiIepiOGWIk49xW5fpTavECoRSAPK4DhY9MTF%2FGs7KYxFWdb4q%2F&X-Amz-Signature=d20eed11a85c1313d8a3cc0c5240ee88c737a572a23d6ca0f213174241d77919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64IY4LW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3Tw44OZZLhKrdl2v7dwd%2BJSGopoUR8JelIsAGuQ%2Bv8AiBM9qL2w539Ar3p6b3Wjfg2HXWlf3bdCoAsw5SGxs%2FLwiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzOpVE6sUXao%2FFDTHKtwDPi%2B6%2Bpfo%2BRMptgzR7PGoqL5jGpd5YYXb9I6R%2BfKxoTZvw139Ha4t%2FizQuIjs1PAz%2Bg%2FB2CnxB0mUd2WiqlnvGtMFbSmoNtephQ6Jv68Nw5v0M9UMEpgRbVUujVkZlG1FE46m3K9MawiLdwxQVBVpcuX5YJvhODs7eapUt7uZE%2Fl%2FJRPIlGuIjt1mdLkoldhMZtZqUlQ6Sey%2BhNbVaxyhtQilpUevrWR8b6SVGGaQELupAnsnVtTYflGwYp7RXI7Kdk8w1aun3kVTA1d3svc%2B3FTfDONL2qErx6muDJ%2BoS7QeZbs6JmuonG5iQ8FTaIhkDkXOH7X%2FVQXf%2FMpOlAv0WJRJVFxSbS8HF%2BnSNDINprQKdnxXBEJgiHQRJLIwpYOenKU5u8J91DjgzVyRbdVxESTVMnLIGx05zgMSEqf8EqoGpVIBRc58d5BMiUSJHM3Nbyie%2FikIBMssyho1Kft8%2Bgo2TPFWYYhlUhh0UBKgkwiyQxyL33DJXNjHUrkP9U0bTlXS1HTxz1NYcayc4sXGLwzy4%2BVPtG3O6CTOjMMRw%2FvS3UcpwvVewJDb1IZkLS4SGGqff7rt4Fq%2BF3flR53Q3%2BhLB1Aq6cnfUeItnuXQU15Vn4Hc09KXBkZrvUYw2qTfyQY6pgHkl5N9QL%2F18pVNQ%2FJPh1ViZRGh21u9TeSn8zJ7k9aoUuJVs7oPTwd3%2BzCt3AYTN7W0LfYX0ImD3mvuSP586mydzh8VN6FRlCI9w8C4f6PAb8m6ZdJNALdy4%2B7%2FffQ7SapWMOzz1oNdrNkD%2BYHxyTsPsW8sht4k%2FPtqpKuvMi%2BTUdiIepiOGWIk49xW5fpTavECoRSAPK4DhY9MTF%2FGs7KYxFWdb4q%2F&X-Amz-Signature=9d60ed375247cbc544c7fe2851be1cea42d55a2807a75315b95aacec69cc82d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
