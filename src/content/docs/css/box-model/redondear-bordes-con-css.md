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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMYEHBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSQ210pnZP6FkzQvPDvROq7WSnP22mdeZDwX9cu%2BUUnAiEA8SP%2FWBZ8ipOoMVMh6ws2D2Q46Wf5Km9cEmBHQpy3F6sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJa7rlMW%2FyAP71J2RCrcAx2PqECLlzAJiqfhUSN7zbG6ZK9xj34eMLRRciyma4pnmM4pKjr5SbZEQnby0VaFU4qqCZUku3zP2L%2BgN6WTw4eeVPkhFVDeYbCizkC0qfmj1PY%2F20KZ5XF5wq76PVUvFqUQcf8UYNG%2F034qIc5m3VRZS0KtlDazh6EeH8elbb6xmUxT2TJbKfwfAfdpF9DBafeGli8LbyLF2WixZSuNDeoHLfd%2FAItW7Zu5phcA7YXwaaxRRsumaLiMX706a9nRNaf3a0ETot18%2FbgEOSiE3cShRUA24g2d7r6dUtVIxQJfTxG4B1m%2F21FByF0hbHRGLkfJ6B2%2BUzxIT9rWomZika%2FwwoDu19WgbTG7rTjeKimXBPQldIbe7IXeOmyk3UvvweM9EP1XZVrRr1i4sT7%2FY2Y3AoPQoctkXqFHD5Ex4qHiJ%2FPR3KattQkdSMwYXcfXwUuqC4q5TaLY92nDMgg62NdhsTjQfD2Nct87gpxauILS9noV0nkLauYznLW3JsK4q5xA3BdbwpqYiY6bP4jQx8hVJaqRQLwo%2BdukvVDvNv94n6m9LNDRG0ewoKUvLDHx1cCP%2F8pWDZvtArQ4MinofZEJnBeTSwu2l%2B3T4olOwL8D6LVmUB%2FGEnDzXg%2BNMKPjisoGOqUB6C3buqWOBCtj3mrIVzebZ4y7fHX6PS95IEqqGpCGc6T%2BDzhBSNncE%2BmmcV8NREVpK8WOybXWz%2BASc7DoNJI%2BWcozemx53ff36m1ImoG6ERmrdObAhrPs7f78czf7cfx32t8PHRPwklvG6EWbNiCakB4WdN1%2Bl5MJPD2e9nkBNFAxd6PuJrqvvpZJ18WULg6qRSD5InycGwGp5v1gXoDq0eGyKHT4&X-Amz-Signature=a0c8b795383a4daf6252a0e4110502966dba3fbee9cf6ffc1b41729a47fe84e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMYEHBO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSQ210pnZP6FkzQvPDvROq7WSnP22mdeZDwX9cu%2BUUnAiEA8SP%2FWBZ8ipOoMVMh6ws2D2Q46Wf5Km9cEmBHQpy3F6sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJa7rlMW%2FyAP71J2RCrcAx2PqECLlzAJiqfhUSN7zbG6ZK9xj34eMLRRciyma4pnmM4pKjr5SbZEQnby0VaFU4qqCZUku3zP2L%2BgN6WTw4eeVPkhFVDeYbCizkC0qfmj1PY%2F20KZ5XF5wq76PVUvFqUQcf8UYNG%2F034qIc5m3VRZS0KtlDazh6EeH8elbb6xmUxT2TJbKfwfAfdpF9DBafeGli8LbyLF2WixZSuNDeoHLfd%2FAItW7Zu5phcA7YXwaaxRRsumaLiMX706a9nRNaf3a0ETot18%2FbgEOSiE3cShRUA24g2d7r6dUtVIxQJfTxG4B1m%2F21FByF0hbHRGLkfJ6B2%2BUzxIT9rWomZika%2FwwoDu19WgbTG7rTjeKimXBPQldIbe7IXeOmyk3UvvweM9EP1XZVrRr1i4sT7%2FY2Y3AoPQoctkXqFHD5Ex4qHiJ%2FPR3KattQkdSMwYXcfXwUuqC4q5TaLY92nDMgg62NdhsTjQfD2Nct87gpxauILS9noV0nkLauYznLW3JsK4q5xA3BdbwpqYiY6bP4jQx8hVJaqRQLwo%2BdukvVDvNv94n6m9LNDRG0ewoKUvLDHx1cCP%2F8pWDZvtArQ4MinofZEJnBeTSwu2l%2B3T4olOwL8D6LVmUB%2FGEnDzXg%2BNMKPjisoGOqUB6C3buqWOBCtj3mrIVzebZ4y7fHX6PS95IEqqGpCGc6T%2BDzhBSNncE%2BmmcV8NREVpK8WOybXWz%2BASc7DoNJI%2BWcozemx53ff36m1ImoG6ERmrdObAhrPs7f78czf7cfx32t8PHRPwklvG6EWbNiCakB4WdN1%2Bl5MJPD2e9nkBNFAxd6PuJrqvvpZJ18WULg6qRSD5InycGwGp5v1gXoDq0eGyKHT4&X-Amz-Signature=9f8ef2aa45e7b07cde699e03da9b902029aa2172f76e8bdaed2cb106842c1417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
