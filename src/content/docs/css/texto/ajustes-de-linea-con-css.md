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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NALDZ7O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE%2BLu66mN2xZPhMrz6igj6VbojB36DOmdLH6HGlNNM2AiBj6yY%2BIrJ8cfktLMPH3dx7BVFN3BV6Pj03NFmQyN0dLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMHTc5CdyJ5xh7moQZKtwDMkBuZ4Z1aVc1qtvkR1U2DUdyzCQ%2Boou7agviz5YmVikP3lgVVAqsuNNPKX4jTcbnzhO7H2LiMSIUWqGcZyqtoXHtFD6gjbeK39OWjz1JYitzhARGQRFGUKSMJubU9bQfQiHmKkZxIxsli1oc2qeJv1F3VMviHGtj4BaBw49h1wBk2ccNpJ6SNDmnPSCdsFTtodf4UljnxbyaIxZw5aCwQ8om5h7f%2Bk6nNq2Oq6xVQq3x0zmmZO%2BdM8tkfJaudZKyVXwmS9htMRVBXktqQziv6og5Hhtpuv0CXQ5WDVg1KGhBDyodBvAjVlWRJ%2FEL7uSwzcFTK28QVHjEpk%2BruL8Y%2FLEVgspjLUazSSTJ8M6qzzbxo%2BAmTaIKHHiWWD6fU0Bp%2F3oRQRvqkKxxgDto167ckjuarq%2FNDFh4NxK9EmcAWb3otNI4ZyYxKZHNy4Ijy5EcWN%2FzY12tTH8zoxwgJQruEdAKR87002N0DikgLWt7bmIZ9baPZRX6F9%2BXS1A6erMpNtM%2BlFqcsUHZm8DlV6pIvzpTuMQToqsWTllmiqPJTiLolaoLGouBLW%2BafIcCvv4egDiz9hKk9n2eUMQbMd%2FnmhKFGaXB50g5Y6cCsVCeohL0H3G%2Fl3ai4XdUuHsw2paIygY6pgH7kadq7%2Bj1rXRkRwU9nhCZ3bDvc2ItQVOyeD4puasEubHpK65o7sN9JlLq4jIvBmY87ah1s6N4no3ON5NcXFf4yvrPjd7ft4PXXwaOUpsZ71jF6JA4n15f%2F1KlZewG2xnzOu9fb0NdYaog9gskbjyEQfDC4LNCT1d3lsDQVEJFPq7O3ja19EujZ06yodGlJewL9U8sm9E8lbvd7CJ2i7lN6tWTDOoL&X-Amz-Signature=573da9efb0f9dc3542cffe4e7dd165ee5c873dc3367dc6bc0aa138363ca3e6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NALDZ7O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE%2BLu66mN2xZPhMrz6igj6VbojB36DOmdLH6HGlNNM2AiBj6yY%2BIrJ8cfktLMPH3dx7BVFN3BV6Pj03NFmQyN0dLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMHTc5CdyJ5xh7moQZKtwDMkBuZ4Z1aVc1qtvkR1U2DUdyzCQ%2Boou7agviz5YmVikP3lgVVAqsuNNPKX4jTcbnzhO7H2LiMSIUWqGcZyqtoXHtFD6gjbeK39OWjz1JYitzhARGQRFGUKSMJubU9bQfQiHmKkZxIxsli1oc2qeJv1F3VMviHGtj4BaBw49h1wBk2ccNpJ6SNDmnPSCdsFTtodf4UljnxbyaIxZw5aCwQ8om5h7f%2Bk6nNq2Oq6xVQq3x0zmmZO%2BdM8tkfJaudZKyVXwmS9htMRVBXktqQziv6og5Hhtpuv0CXQ5WDVg1KGhBDyodBvAjVlWRJ%2FEL7uSwzcFTK28QVHjEpk%2BruL8Y%2FLEVgspjLUazSSTJ8M6qzzbxo%2BAmTaIKHHiWWD6fU0Bp%2F3oRQRvqkKxxgDto167ckjuarq%2FNDFh4NxK9EmcAWb3otNI4ZyYxKZHNy4Ijy5EcWN%2FzY12tTH8zoxwgJQruEdAKR87002N0DikgLWt7bmIZ9baPZRX6F9%2BXS1A6erMpNtM%2BlFqcsUHZm8DlV6pIvzpTuMQToqsWTllmiqPJTiLolaoLGouBLW%2BafIcCvv4egDiz9hKk9n2eUMQbMd%2FnmhKFGaXB50g5Y6cCsVCeohL0H3G%2Fl3ai4XdUuHsw2paIygY6pgH7kadq7%2Bj1rXRkRwU9nhCZ3bDvc2ItQVOyeD4puasEubHpK65o7sN9JlLq4jIvBmY87ah1s6N4no3ON5NcXFf4yvrPjd7ft4PXXwaOUpsZ71jF6JA4n15f%2F1KlZewG2xnzOu9fb0NdYaog9gskbjyEQfDC4LNCT1d3lsDQVEJFPq7O3ja19EujZ06yodGlJewL9U8sm9E8lbvd7CJ2i7lN6tWTDOoL&X-Amz-Signature=02166b087828a1e0bc482946ba14352eef43ff1256536d6a0348a911f2c33805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

