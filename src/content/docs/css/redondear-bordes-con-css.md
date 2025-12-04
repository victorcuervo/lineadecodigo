---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLQPVIJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCOAJcExqLbZsXzSQV%2Fj13evgiU%2BDPUKgKHDQwWCyZRfwIhANmp%2Ft9b%2F6xP57h7tFfSreaXRFyTvWM08S%2BJCmFpgyNDKv8DCDoQABoMNjM3NDIzMTgzODA1IgxgFQp8yKneeoBkGrMq3AMPtBCGtRdbsokBOl1l88rQfboUHHn6LNeISwgADF9O5biV4le6LpKnAWPHeZsY0SgHxfY6FfSzv%2Bfc%2BkRjGV%2BQtsYPq6y%2F1%2B8MEfM0iUo5sgC3wvzNu%2BOCZQW6z0j3gVjm%2BiKFBjlPvstCvHK1IIwk109sIO%2FT%2FETOb8gNxxRgGYOYoU%2F49lbwRRR8gndUoPxjwLN42PHCT4YCm1sl1JakOqvVOTt4e1zFgeVF2QNCPertmOEaVXoV0VoDJtbB3efiKeEaBdDsZt8lxj8eQwpPg4wNFUZ3FwvUJLlvfoYhgKVtDoSORDLCrHVEByvyJ15F82TbmLTkVw11E%2Bf9HD8fo790zAO8BfPie0Jo8q%2FJFejmZZn310DxLOmhyj8YlhZKk3qGRiZplmup9LQm3DY%2B6DgImktz3Oz%2F8UtslDgFPEGJhbzbQOjdydjs8ncFc1xA1blML%2FgUId1y1MEgueRsKq%2BSDxnzzMTm5GRD3gJQdnuPRo%2BmLso2ropOeg9Uf3KHwLrJEu%2FsQAwxV1B1PJ5W%2F5n71FwRRy9PyNIHbu%2F6XQsJkeRMRZdjvrsJcnGi1nxQ48yJHgyH4AGQpYwpNmJwIG0sO%2BK6fh5oh1WNEUS4c65okbwGxZqDquBI4jC6tcPJBjqkATOa62NS2L0NiQJebfoMdIzVFe6RBg8L%2Bk9Jfj1IwNwxNyIn7%2FBLsxlb%2BvsCO806Afb5oPswxl8ZtJS7UhNL4qI9xNTP8%2B0jnvas5rAXbgU%2BZa1tLqD%2FUtYQoFX1lir6MvbarC1gyA8PveguiSZbG5j4H89cJvv7WtSg0gveu1xACmyFmmfNmdQV3b3bNJ%2BAXfWbt3gOyquwIsV4Hv%2BxRZzq7v1K&X-Amz-Signature=dff9db828a2406cb02cfbfb8c964ec22812a2e373c158c29582a89d429d1e964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLQPVIJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCOAJcExqLbZsXzSQV%2Fj13evgiU%2BDPUKgKHDQwWCyZRfwIhANmp%2Ft9b%2F6xP57h7tFfSreaXRFyTvWM08S%2BJCmFpgyNDKv8DCDoQABoMNjM3NDIzMTgzODA1IgxgFQp8yKneeoBkGrMq3AMPtBCGtRdbsokBOl1l88rQfboUHHn6LNeISwgADF9O5biV4le6LpKnAWPHeZsY0SgHxfY6FfSzv%2Bfc%2BkRjGV%2BQtsYPq6y%2F1%2B8MEfM0iUo5sgC3wvzNu%2BOCZQW6z0j3gVjm%2BiKFBjlPvstCvHK1IIwk109sIO%2FT%2FETOb8gNxxRgGYOYoU%2F49lbwRRR8gndUoPxjwLN42PHCT4YCm1sl1JakOqvVOTt4e1zFgeVF2QNCPertmOEaVXoV0VoDJtbB3efiKeEaBdDsZt8lxj8eQwpPg4wNFUZ3FwvUJLlvfoYhgKVtDoSORDLCrHVEByvyJ15F82TbmLTkVw11E%2Bf9HD8fo790zAO8BfPie0Jo8q%2FJFejmZZn310DxLOmhyj8YlhZKk3qGRiZplmup9LQm3DY%2B6DgImktz3Oz%2F8UtslDgFPEGJhbzbQOjdydjs8ncFc1xA1blML%2FgUId1y1MEgueRsKq%2BSDxnzzMTm5GRD3gJQdnuPRo%2BmLso2ropOeg9Uf3KHwLrJEu%2FsQAwxV1B1PJ5W%2F5n71FwRRy9PyNIHbu%2F6XQsJkeRMRZdjvrsJcnGi1nxQ48yJHgyH4AGQpYwpNmJwIG0sO%2BK6fh5oh1WNEUS4c65okbwGxZqDquBI4jC6tcPJBjqkATOa62NS2L0NiQJebfoMdIzVFe6RBg8L%2Bk9Jfj1IwNwxNyIn7%2FBLsxlb%2BvsCO806Afb5oPswxl8ZtJS7UhNL4qI9xNTP8%2B0jnvas5rAXbgU%2BZa1tLqD%2FUtYQoFX1lir6MvbarC1gyA8PveguiSZbG5j4H89cJvv7WtSg0gveu1xACmyFmmfNmdQV3b3bNJ%2BAXfWbt3gOyquwIsV4Hv%2BxRZzq7v1K&X-Amz-Signature=65241448f6c70bade4101cafba43b4f4d65444245f0b9bef0ec8bc51be278f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
