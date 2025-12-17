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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHILNIM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqYmJ0REFVYWri4rMemAQAJHJ1fYgAt96m1FVbnM7R1QIgIbbi52b7CJO2SLjMgFxuB%2B1xN2E5fd7m%2Fg%2Faj5x5qEMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPilQDv9l24sII7IOSrcA7%2FhkT7Z1sZ7al%2Fd5QXQt3KvJKunmE9iGFvwzK3AgOSFe%2B%2BTqVaTL4CapNKKe60xlEGni0XFiVAailO%2Fw7iJKgOnf5ITu2%2BihK3uQOxCsXyvI7LSO7ePv7fnHYpIAW2NCzFXyfDxpw5IWxsR2wxptt9Rz3ZIKzdk8KuNA7Zuhz2qjIucxRr07iYmv4PSvNZ%2BaeQ7TpX89SdiaFgCJuFmfxlUJEdP4E%2BxLSSRCc%2FIZcnBO1CvjwKl%2FhPPF3dKDNwYLM2TLdK4AJm5yiQmNP1hpLJuH%2B3ezQgdpOnaFp6kyZpehN0pPI8cY9Ng695zQaZ7cfLP7WAP%2F6Y7Ap6wnSOODGFYQtLCw1%2F8usl4MPIyACp%2By%2BbDxCh0HXF0roQzMnazEE7h2GesG9N7P1DarzDZUOfjOAkxlHHhZyBbXEr5b421TNwJojY3jM%2FtZtYD6ZtyVH5KWChY7Ut1L6krB2j7JY98I946wRMIymA9PVpMakzzYR3YLD73xsGtaoM0Eq8sqyADYbbgzaDTmm6kteOolcKKCrO2C1ui0384blzTa3azMkWqa6a6fIR6DPshFwH1ov8fgzKwFgdKLxPIu4vto1qA%2BIWIxFTCy1ugEgjSjf0tMHbAckcUHLFkUwlfMOydicoGOqUBdVBo25I4%2BbP99qMA1KsuR89sVL6Xe%2B8GtPweb87ERhhQZDsFU8XKyfGo%2FFj9t1%2Bzl1sM4tt%2FpUhwIYugHnZY1ehyLL9TQ1bJDTRcbPU0nNoNQ55LHPhRts7G88Qkxheg1huahhqzIysy9Gi%2FAh7q31WF0uPIcShvn1Hm2wcv%2B6xCH4i%2FX1p7%2BHLCm37uVvl%2Bt%2Bli3noyWhcCXRlLBNS52Ki5hUqZ&X-Amz-Signature=39fb7e1a85afd6349b18c6802e9b7aaf7d94bf33581f099b92f9d668a722b455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHILNIM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqYmJ0REFVYWri4rMemAQAJHJ1fYgAt96m1FVbnM7R1QIgIbbi52b7CJO2SLjMgFxuB%2B1xN2E5fd7m%2Fg%2Faj5x5qEMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPilQDv9l24sII7IOSrcA7%2FhkT7Z1sZ7al%2Fd5QXQt3KvJKunmE9iGFvwzK3AgOSFe%2B%2BTqVaTL4CapNKKe60xlEGni0XFiVAailO%2Fw7iJKgOnf5ITu2%2BihK3uQOxCsXyvI7LSO7ePv7fnHYpIAW2NCzFXyfDxpw5IWxsR2wxptt9Rz3ZIKzdk8KuNA7Zuhz2qjIucxRr07iYmv4PSvNZ%2BaeQ7TpX89SdiaFgCJuFmfxlUJEdP4E%2BxLSSRCc%2FIZcnBO1CvjwKl%2FhPPF3dKDNwYLM2TLdK4AJm5yiQmNP1hpLJuH%2B3ezQgdpOnaFp6kyZpehN0pPI8cY9Ng695zQaZ7cfLP7WAP%2F6Y7Ap6wnSOODGFYQtLCw1%2F8usl4MPIyACp%2By%2BbDxCh0HXF0roQzMnazEE7h2GesG9N7P1DarzDZUOfjOAkxlHHhZyBbXEr5b421TNwJojY3jM%2FtZtYD6ZtyVH5KWChY7Ut1L6krB2j7JY98I946wRMIymA9PVpMakzzYR3YLD73xsGtaoM0Eq8sqyADYbbgzaDTmm6kteOolcKKCrO2C1ui0384blzTa3azMkWqa6a6fIR6DPshFwH1ov8fgzKwFgdKLxPIu4vto1qA%2BIWIxFTCy1ugEgjSjf0tMHbAckcUHLFkUwlfMOydicoGOqUBdVBo25I4%2BbP99qMA1KsuR89sVL6Xe%2B8GtPweb87ERhhQZDsFU8XKyfGo%2FFj9t1%2Bzl1sM4tt%2FpUhwIYugHnZY1ehyLL9TQ1bJDTRcbPU0nNoNQ55LHPhRts7G88Qkxheg1huahhqzIysy9Gi%2FAh7q31WF0uPIcShvn1Hm2wcv%2B6xCH4i%2FX1p7%2BHLCm37uVvl%2Bt%2Bli3noyWhcCXRlLBNS52Ki5hUqZ&X-Amz-Signature=239a487a2c318238226f18d2d8ea921242e4bd1ccc6938fac9c11ee332c927e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
