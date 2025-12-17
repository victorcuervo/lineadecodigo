---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TPONEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnmcWgrYpkAQdoaYXKNRTNdbixLQoOE8FOCCQEs7zekAiEAs%2FNfcCClvBnhsjX5BHKce6fI7IQ%2BKuO4WrGbepAol1kq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBmwXCeanrPDGhYMACrcA9IH%2BkBLpCGzjeqKPW5xewFStYUN6pTJzVapcddd3PLjW97KStZn3Mf841129qKGUJyRDIjREFQ49csWz4GMhcTQiNXxAenUwvt9Fn45m22jPDNwUgBChFXZ3tHAjxB3yPh3f4Vqbno25xVQIRReOA8WZltY12iBNBekwPYJ%2FIoqhj%2FmOeTflSnBEVqb5V2f%2BglXWAUb%2FlNdMUHOajllC4o6suOm6QhSSJKjSbheeCTbds9DJWLFpfs5M%2BrSOO9Qw3z%2B3eqUVVd4ZKnqzO0UiYqc705Pf20Q%2F5fTdEcXKS7SIjdaH71pwQkgDMB0vecR5kVWyFVhXqofYAdu6BGePW8bd4orKz15hr4Dv4FgV3yE%2FpDxzRsbTT5Oo1V2MEanR9E4tCPB1Y7LWf2W%2B%2FsFWOktT1kmTbCP4BOJrH8OVrHjuG%2BnYEl6PkefMCmQTzBhlzmq89g354l2CdA5V1FaoGjAJtBrHUVfIgqfa0JSduX9INZ0NieWXGWr4wopCyxc7cG6esU7vkymR4jeh4XbaUeNbIrtq3dDAEGikyI7suQ1uHjKS2IRHbGoTCenffo5lzR0yD%2BSrLdD729KRimmsurWH7%2BoTxgittFQ4Igd3stmDaMN%2FNPhRtaZzRiwMOGdicoGOqUBy2SEibkWdoaXLOry8sBiAJp6AusP3shT8dOSCuKVr%2F0%2BazqpMhmS34wFy4pXOXIX8uzCiv6ivH8LQtri9UE6HAhp4Md3BhDKPvbpFIHhy%2FaS3a5s8HwQNf%2BwwKVTV4d2zvwCsdSWUQqVxjLkWh1Eog6U2wXRSqqeWvUOCW13xkVVb3oc5ssbgNKzJdNnwu9rvhEfCGF%2BB0qbvP06jr%2F%2Fu2Ws44ca&X-Amz-Signature=84688a054e910d4767b5e3db37c5a2b68f53a93182f501ae65d359cf288f78de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TPONEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnmcWgrYpkAQdoaYXKNRTNdbixLQoOE8FOCCQEs7zekAiEAs%2FNfcCClvBnhsjX5BHKce6fI7IQ%2BKuO4WrGbepAol1kq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBmwXCeanrPDGhYMACrcA9IH%2BkBLpCGzjeqKPW5xewFStYUN6pTJzVapcddd3PLjW97KStZn3Mf841129qKGUJyRDIjREFQ49csWz4GMhcTQiNXxAenUwvt9Fn45m22jPDNwUgBChFXZ3tHAjxB3yPh3f4Vqbno25xVQIRReOA8WZltY12iBNBekwPYJ%2FIoqhj%2FmOeTflSnBEVqb5V2f%2BglXWAUb%2FlNdMUHOajllC4o6suOm6QhSSJKjSbheeCTbds9DJWLFpfs5M%2BrSOO9Qw3z%2B3eqUVVd4ZKnqzO0UiYqc705Pf20Q%2F5fTdEcXKS7SIjdaH71pwQkgDMB0vecR5kVWyFVhXqofYAdu6BGePW8bd4orKz15hr4Dv4FgV3yE%2FpDxzRsbTT5Oo1V2MEanR9E4tCPB1Y7LWf2W%2B%2FsFWOktT1kmTbCP4BOJrH8OVrHjuG%2BnYEl6PkefMCmQTzBhlzmq89g354l2CdA5V1FaoGjAJtBrHUVfIgqfa0JSduX9INZ0NieWXGWr4wopCyxc7cG6esU7vkymR4jeh4XbaUeNbIrtq3dDAEGikyI7suQ1uHjKS2IRHbGoTCenffo5lzR0yD%2BSrLdD729KRimmsurWH7%2BoTxgittFQ4Igd3stmDaMN%2FNPhRtaZzRiwMOGdicoGOqUBy2SEibkWdoaXLOry8sBiAJp6AusP3shT8dOSCuKVr%2F0%2BazqpMhmS34wFy4pXOXIX8uzCiv6ivH8LQtri9UE6HAhp4Md3BhDKPvbpFIHhy%2FaS3a5s8HwQNf%2BwwKVTV4d2zvwCsdSWUQqVxjLkWh1Eog6U2wXRSqqeWvUOCW13xkVVb3oc5ssbgNKzJdNnwu9rvhEfCGF%2BB0qbvP06jr%2F%2Fu2Ws44ca&X-Amz-Signature=2f3582894731e8082a5b45d8c21ea08683e43efdedf2e25457da89c475df1670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

