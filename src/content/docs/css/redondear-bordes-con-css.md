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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AOCWM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB78Scgmb9Ve%2Fgw6HXpAAb%2BXAP6sFiYSMguSlFUOWvDfAiEAu%2BFF2yU%2BScEgueHOnkyWNQh03xr%2BcANxGZsyIkTZJEsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDGPXU2gd7q5hTvKDCrcA6rp3GU7Ss6t1a6Lduj%2FrVwK5i45I84UsEdR7mXH5I13cMOzuEJEIVCn6mBvhAPav8HJ%2BKvvl%2B3008jUQ7lqpnTp62vPv2e0DbnXyNe1t5gOPPKC7805KTs47G%2F5mSdifmmLeA%2FAxaNwdszKlVYwunF8pBVxs%2FCFyxLa92et3621Ayex8TijipXtoRxWRYMZCp5BYI75T8ARSwr4%2F98izlSuu4GD4OXjAPRhmRb0YclscDES7wIumkToVFrx0d2lz3Qqa%2BxmXDLIDKwjKqdX7Hpz%2BXMIDV2%2BV8lXbpHQcJbNtXUf1ieit95dAM9Prxbc%2BNakoiNhUSc8J2ksqHLOQ%2BG%2BNA2AhQfxfvDjwk4iwJjpqb7Ukjsktw00%2Bl32mL7GPdV%2FRV03tvTPR07oAnF0kZdysa6nTEB5COc94RZgWi9xJQXBcNV8BAF%2BmoXibP4n5611JfLiimFOTJUaT5qYtUA5%2FgS0vDtVzquiJXA04JysC46PF10wFVcUW%2FYmztGipK%2FeKOUoCKJOhBVxhSr2cC9uHO7ZTBjSMETPl1ffUMAZg5HmmciHy727lbF%2FcgOs2WAMlGWRl%2F9dIvUQCyTSgT21yT7pZhN2hXuWyqGIhnGYSOmWlV9wFbvFFgTOMLnJxckGOqUBE76%2Fjq2SEGs4wAjeDhxyQVrMAZdhxcD%2BMejyqncxPAGGLYWjuvz9j6BU%2BjU%2F7uocCs%2F1smd09CJtcc%2Bqiwqm%2FkmrHQGSqnD81eSa6fI59x79oKB3EgK6aqIgTKx2LTdxh53E3RDAHDZhf6kW9xJkvNiK%2BdYry1f7jIAP1%2F2bYJEIAHMPidjw4knmhLKvCObg28CdSzDZeAREH460MKpQAl0%2F%2BetX&X-Amz-Signature=8d79138331b679db3bce24197cfa7a0f0951ed23fdb668849fb9507b31ac4bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AOCWM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB78Scgmb9Ve%2Fgw6HXpAAb%2BXAP6sFiYSMguSlFUOWvDfAiEAu%2BFF2yU%2BScEgueHOnkyWNQh03xr%2BcANxGZsyIkTZJEsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDGPXU2gd7q5hTvKDCrcA6rp3GU7Ss6t1a6Lduj%2FrVwK5i45I84UsEdR7mXH5I13cMOzuEJEIVCn6mBvhAPav8HJ%2BKvvl%2B3008jUQ7lqpnTp62vPv2e0DbnXyNe1t5gOPPKC7805KTs47G%2F5mSdifmmLeA%2FAxaNwdszKlVYwunF8pBVxs%2FCFyxLa92et3621Ayex8TijipXtoRxWRYMZCp5BYI75T8ARSwr4%2F98izlSuu4GD4OXjAPRhmRb0YclscDES7wIumkToVFrx0d2lz3Qqa%2BxmXDLIDKwjKqdX7Hpz%2BXMIDV2%2BV8lXbpHQcJbNtXUf1ieit95dAM9Prxbc%2BNakoiNhUSc8J2ksqHLOQ%2BG%2BNA2AhQfxfvDjwk4iwJjpqb7Ukjsktw00%2Bl32mL7GPdV%2FRV03tvTPR07oAnF0kZdysa6nTEB5COc94RZgWi9xJQXBcNV8BAF%2BmoXibP4n5611JfLiimFOTJUaT5qYtUA5%2FgS0vDtVzquiJXA04JysC46PF10wFVcUW%2FYmztGipK%2FeKOUoCKJOhBVxhSr2cC9uHO7ZTBjSMETPl1ffUMAZg5HmmciHy727lbF%2FcgOs2WAMlGWRl%2F9dIvUQCyTSgT21yT7pZhN2hXuWyqGIhnGYSOmWlV9wFbvFFgTOMLnJxckGOqUBE76%2Fjq2SEGs4wAjeDhxyQVrMAZdhxcD%2BMejyqncxPAGGLYWjuvz9j6BU%2BjU%2F7uocCs%2F1smd09CJtcc%2Bqiwqm%2FkmrHQGSqnD81eSa6fI59x79oKB3EgK6aqIgTKx2LTdxh53E3RDAHDZhf6kW9xJkvNiK%2BdYry1f7jIAP1%2F2bYJEIAHMPidjw4knmhLKvCObg28CdSzDZeAREH460MKpQAl0%2F%2BetX&X-Amz-Signature=0573df4c588a6e4ee7abeb5f4e2943ec9565de92799040ef932663a17c0f9e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
