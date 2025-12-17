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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZAV5TE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTinHgPlEP3GDrjQOa2mXbXkqeQi7eBo8qo7yNQqvIfAiAXp0QO2jhLsxgenBrRaBXYwoR3ygwK9%2BL0iAiHC3A5kSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMmfavQGluUNvJJXjTKtwDOG6XzxAukTudQmfqdr1Gj5PCW6pJFTkrja9K6n1k8Fpkqlt6tR1K%2F8%2B3%2BPiS%2B9l9HfQbiA9j6IvZPoYqwOwiJnv4ubSorZ%2FUJ8wi6PJNF04KarhlPSG%2BjNjYYKfaNGFsywkPh0eoKYZwuJIpOKugGsO46%2B3vcwY%2FB20l9VoPillbLBvTBpiVhrzXSSayRmv8VqRMJFcZyuy7gKXp1AjnEmSJ8fx%2B0ZYOAVkXTr0HhMihV%2F6KmtOeofYZgJ93Qt8tiTWO3fOmn%2F6o131I6XdJDN1HT9Q2g3QS3my%2FLkHejp%2BvD1SzhX2HyzNVsrLkbvXkELMI3d%2FKReQ1Wm5GzxwtxTV2%2FwAII%2F4fLAoJirNzlAhL2tXB484GVrj8EcZtwwa2TK0n6bC9S14pglRQ9ZGM0RB3A9E530hEaSjVfiiE3RPcO5fOQzkeenKm5eAYV1ihbxddnWERiq16f1qQBclMn%2BWOeE%2Ftn0HBHvyVmiTqCj4vbo%2FkSBurussVU69gJfSik1fC%2Fsmdx57QHvFXLIiwDblMrufitONeNFVoG3VjWsvhfGTzDX19GEyJ7jTNEo1G3663C4h5C8wXibK12zluxG0iAC6cFcdtViCJLpTL1zkbREDNUP4Kvnl%2B5bowjtGJygY6pgFm%2F%2BGFugqmXEKiMbgm015ccLnBBYtwnS4LgVBTnxOyACFkOgNwOzu0ePHyyrufT5QQILZL5IMyeL9B5jpPBGhxFAk%2BdkldqHrEED55FiYZpuobt%2B9SYb0pwMSNJF5DqBbNOaLUYYOFf04b8m7Is051Vh5gfagKzNrANvc%2Fjc8VIokUl%2FBDeBWG%2BoUPVV7edZxG69uH06Ui0xMzsVW1mHQzGYt84OL4&X-Amz-Signature=7d8264ed88f36d37be45872c932fa9745b4448ffb3f11b89bf4bde91bca35142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZAV5TE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTinHgPlEP3GDrjQOa2mXbXkqeQi7eBo8qo7yNQqvIfAiAXp0QO2jhLsxgenBrRaBXYwoR3ygwK9%2BL0iAiHC3A5kSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMmfavQGluUNvJJXjTKtwDOG6XzxAukTudQmfqdr1Gj5PCW6pJFTkrja9K6n1k8Fpkqlt6tR1K%2F8%2B3%2BPiS%2B9l9HfQbiA9j6IvZPoYqwOwiJnv4ubSorZ%2FUJ8wi6PJNF04KarhlPSG%2BjNjYYKfaNGFsywkPh0eoKYZwuJIpOKugGsO46%2B3vcwY%2FB20l9VoPillbLBvTBpiVhrzXSSayRmv8VqRMJFcZyuy7gKXp1AjnEmSJ8fx%2B0ZYOAVkXTr0HhMihV%2F6KmtOeofYZgJ93Qt8tiTWO3fOmn%2F6o131I6XdJDN1HT9Q2g3QS3my%2FLkHejp%2BvD1SzhX2HyzNVsrLkbvXkELMI3d%2FKReQ1Wm5GzxwtxTV2%2FwAII%2F4fLAoJirNzlAhL2tXB484GVrj8EcZtwwa2TK0n6bC9S14pglRQ9ZGM0RB3A9E530hEaSjVfiiE3RPcO5fOQzkeenKm5eAYV1ihbxddnWERiq16f1qQBclMn%2BWOeE%2Ftn0HBHvyVmiTqCj4vbo%2FkSBurussVU69gJfSik1fC%2Fsmdx57QHvFXLIiwDblMrufitONeNFVoG3VjWsvhfGTzDX19GEyJ7jTNEo1G3663C4h5C8wXibK12zluxG0iAC6cFcdtViCJLpTL1zkbREDNUP4Kvnl%2B5bowjtGJygY6pgFm%2F%2BGFugqmXEKiMbgm015ccLnBBYtwnS4LgVBTnxOyACFkOgNwOzu0ePHyyrufT5QQILZL5IMyeL9B5jpPBGhxFAk%2BdkldqHrEED55FiYZpuobt%2B9SYb0pwMSNJF5DqBbNOaLUYYOFf04b8m7Is051Vh5gfagKzNrANvc%2Fjc8VIokUl%2FBDeBWG%2BoUPVV7edZxG69uH06Ui0xMzsVW1mHQzGYt84OL4&X-Amz-Signature=986fbf33ebf9381a5f4298f07bb71cdcfc305bf8e8f53b604eaee250e559834b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
