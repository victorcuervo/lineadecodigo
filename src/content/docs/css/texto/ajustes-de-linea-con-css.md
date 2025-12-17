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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42UCJKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8yon1QYjUf2ugVwHgmIPk2M94R0k4%2F0tW4QfoHkgDtAiAcSpAWGE9HU%2BvMInWRmu0uokNp%2FL2rXkBhXDWOlx8zviqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy2WrPWFPhCuPbYAGKtwD7pSbRHRt17eKvb0OuRSvbw%2B52zi7YPynFY2d4mTf%2FKCf1T3aofkXbH3DYtPqI7c0OFlIejJMWo%2B8LsSr8%2B2Sm7Fkt%2F12VdLY8AFw08duz6GdsybxEhOhQmGThbAqlYLF0dHpW9BLgCsY%2BQRonqEtKekCSLwtSV7q5gkaEOgaZHefKzsbM0CbPozlzTHfWJmVV7yPAnU%2BCYkX47Vs6d%2FBG873LXgrHGpkxHXZsv%2FS9oajfHZZfcVJs8Y%2BGvq79KzJylXcF5BJm%2BGEqSKuRILq%2BPp7783xmREtFLogjgyShWgWsWi8AWxQNfC48452V%2FV2mPcFs5yS%2BaHXfcGW8i%2BrnnkFOnOGiK0SWKlAAnChP68wTZsUS4SfDv6bGMEm8CHhfLEyrmDqOBkUYvBFkC%2FDiBwSOnXpKPOKCnH%2FoAjAfKf2Vo5dbb%2FOji3KLSAdex7gK%2Br3EvK3dTtvn%2Fi5GdBaID2adNS%2BfhLY2dnbXdSxsNiu0V0xejZlqKfTkdYWwU5aoGfaedDNUweSQZP49AlR%2BsUwi1tUxKFvrCxW9DGIzdNfknt69%2BN%2BXSxSCFJ%2FNcQw4IHtpFCb1Ncdhiv4y6FvbxQ0W0yZ3zBtGNuzQPW4cmGVnScycT78Yc%2FegH0wzp6LygY6pgGOWJAgJXgDAVvvYDDUxeea4XxGfiFcqDUsrCeyg505GNhAAMGaknkk1BIyfJTAWK9kDgIZJklulJSgatlnbshrbJtzDCD2EX3sn%2FjodN4PEV7lnBrORtKTmftbbYbCDgnzEe5qbdSEaOcWuHZyBPTSpRUnGI0gyIBJZbgX1sB2seJ%2Ba49TRerRrR6m5wsip1HI8GD6qfcQCgpcW3T8VYJuls9wWr4Z&X-Amz-Signature=fe26ce8b2d2e8450bc6f207539dca9ebb9738f5cde71fbf781448f94cf059912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42UCJKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8yon1QYjUf2ugVwHgmIPk2M94R0k4%2F0tW4QfoHkgDtAiAcSpAWGE9HU%2BvMInWRmu0uokNp%2FL2rXkBhXDWOlx8zviqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy2WrPWFPhCuPbYAGKtwD7pSbRHRt17eKvb0OuRSvbw%2B52zi7YPynFY2d4mTf%2FKCf1T3aofkXbH3DYtPqI7c0OFlIejJMWo%2B8LsSr8%2B2Sm7Fkt%2F12VdLY8AFw08duz6GdsybxEhOhQmGThbAqlYLF0dHpW9BLgCsY%2BQRonqEtKekCSLwtSV7q5gkaEOgaZHefKzsbM0CbPozlzTHfWJmVV7yPAnU%2BCYkX47Vs6d%2FBG873LXgrHGpkxHXZsv%2FS9oajfHZZfcVJs8Y%2BGvq79KzJylXcF5BJm%2BGEqSKuRILq%2BPp7783xmREtFLogjgyShWgWsWi8AWxQNfC48452V%2FV2mPcFs5yS%2BaHXfcGW8i%2BrnnkFOnOGiK0SWKlAAnChP68wTZsUS4SfDv6bGMEm8CHhfLEyrmDqOBkUYvBFkC%2FDiBwSOnXpKPOKCnH%2FoAjAfKf2Vo5dbb%2FOji3KLSAdex7gK%2Br3EvK3dTtvn%2Fi5GdBaID2adNS%2BfhLY2dnbXdSxsNiu0V0xejZlqKfTkdYWwU5aoGfaedDNUweSQZP49AlR%2BsUwi1tUxKFvrCxW9DGIzdNfknt69%2BN%2BXSxSCFJ%2FNcQw4IHtpFCb1Ncdhiv4y6FvbxQ0W0yZ3zBtGNuzQPW4cmGVnScycT78Yc%2FegH0wzp6LygY6pgGOWJAgJXgDAVvvYDDUxeea4XxGfiFcqDUsrCeyg505GNhAAMGaknkk1BIyfJTAWK9kDgIZJklulJSgatlnbshrbJtzDCD2EX3sn%2FjodN4PEV7lnBrORtKTmftbbYbCDgnzEe5qbdSEaOcWuHZyBPTSpRUnGI0gyIBJZbgX1sB2seJ%2Ba49TRerRrR6m5wsip1HI8GD6qfcQCgpcW3T8VYJuls9wWr4Z&X-Amz-Signature=63eeeab1781763a426c802b71bc7a49503ac3c1ea5d00b2a8bbb4099455eefe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

