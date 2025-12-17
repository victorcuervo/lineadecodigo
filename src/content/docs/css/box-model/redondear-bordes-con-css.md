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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NJ35CEM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeLI%2B%2F8dVwWdImxuMwEbFOI8jT77nysM4Jluc9p9B1YQIgPb6rPB4Ej%2B4kQ7hlMDT7mhT7AIcdZgGZ4RVtB7%2BsGD8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDaAc90hTRj2rYa88SrcA8bt3wO4Wt658zWlalWLvlz6jV%2Fl982cxC7Gw4k0SQYDaGPCw9SremXrKbeqadlD3u0d3byyDauY7tgJ3BoYaPiZh%2F6Tlt70Rt%2BJOf80QQqatAjduJ%2BeloKWaVdOBpAKcRGJqrlTAK3F3YdX9ZaL8ggAOxw%2BzgW%2B8YsJGDDK4Fe6tV2iNeuD8hWbQw1VXbvZXHt8C9wOSiLakm00VRVYeo%2FykGcVxNHklPY7BO51nVVs2gNl%2FJ7lFB2lXkwvWN9ST%2FQG4dKqXOB3ycSukRRXoMRBf6mGeI1CXZySkFEEVU9j3ZN2kalIGVkla0gZ6L%2FNkOS4zRDolaEDcC3L1KN4KwGnShQpF6GSFjqGo7CQE1baSHcJ5%2F5Dmzx4ixTULewKzlKbuAHMsKamZBbJB1dSI0F1f%2FjEupyXEkyb2Or4Mst5yVYBIW6e8lj2dHGP3MCCRnXHEK4MBGlbUmkiAuLtqSp%2Fv1yhajoTwuVU2TuimovpALDowNvB7cOMtNV6LuepfHdcxAZFxbZcTAdgbnI8tF5nNSstb2lclh7r%2F4kJsjlvKb8IaX5beLw7kYRiLs80Y1Ea5f40V4g0xzQw38IUF2YSH639dWK%2FaB8C%2FhpeGcxlcVR%2BBg8I%2Fub8lVmvMMjfh8oGOqUB1dvbbGJ95%2FDlIHUuBNqn0SxkjWAv9mz4fKO2nbSnBDDkZ8DGMopK7ztGSx1%2BM035DcKDftmO0BzYAR6OSJb8PLzRyz%2FuMcD9ucG0U7AD2koGSJeMAheaSxbBy%2B3fJA8OvvdWqpX5ONpLy42FylpgRrVlInc5X95FD9ZG5t3W0g25RyrofBMEx%2BKZbDh97hDxp1GXjHu1TBarwKhhGmoF%2F7dnAJhi&X-Amz-Signature=d4f01eb421942baba894462113b12f040e6368e26773015be79acd25dea9c47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NJ35CEM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeLI%2B%2F8dVwWdImxuMwEbFOI8jT77nysM4Jluc9p9B1YQIgPb6rPB4Ej%2B4kQ7hlMDT7mhT7AIcdZgGZ4RVtB7%2BsGD8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDaAc90hTRj2rYa88SrcA8bt3wO4Wt658zWlalWLvlz6jV%2Fl982cxC7Gw4k0SQYDaGPCw9SremXrKbeqadlD3u0d3byyDauY7tgJ3BoYaPiZh%2F6Tlt70Rt%2BJOf80QQqatAjduJ%2BeloKWaVdOBpAKcRGJqrlTAK3F3YdX9ZaL8ggAOxw%2BzgW%2B8YsJGDDK4Fe6tV2iNeuD8hWbQw1VXbvZXHt8C9wOSiLakm00VRVYeo%2FykGcVxNHklPY7BO51nVVs2gNl%2FJ7lFB2lXkwvWN9ST%2FQG4dKqXOB3ycSukRRXoMRBf6mGeI1CXZySkFEEVU9j3ZN2kalIGVkla0gZ6L%2FNkOS4zRDolaEDcC3L1KN4KwGnShQpF6GSFjqGo7CQE1baSHcJ5%2F5Dmzx4ixTULewKzlKbuAHMsKamZBbJB1dSI0F1f%2FjEupyXEkyb2Or4Mst5yVYBIW6e8lj2dHGP3MCCRnXHEK4MBGlbUmkiAuLtqSp%2Fv1yhajoTwuVU2TuimovpALDowNvB7cOMtNV6LuepfHdcxAZFxbZcTAdgbnI8tF5nNSstb2lclh7r%2F4kJsjlvKb8IaX5beLw7kYRiLs80Y1Ea5f40V4g0xzQw38IUF2YSH639dWK%2FaB8C%2FhpeGcxlcVR%2BBg8I%2Fub8lVmvMMjfh8oGOqUB1dvbbGJ95%2FDlIHUuBNqn0SxkjWAv9mz4fKO2nbSnBDDkZ8DGMopK7ztGSx1%2BM035DcKDftmO0BzYAR6OSJb8PLzRyz%2FuMcD9ucG0U7AD2koGSJeMAheaSxbBy%2B3fJA8OvvdWqpX5ONpLy42FylpgRrVlInc5X95FD9ZG5t3W0g25RyrofBMEx%2BKZbDh97hDxp1GXjHu1TBarwKhhGmoF%2F7dnAJhi&X-Amz-Signature=665eee2b64e1876494ba27cfe58c4fea4b6f8178401e8e9f6faa841cac349019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
