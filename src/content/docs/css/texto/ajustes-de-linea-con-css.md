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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOQUGVN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYuqlzBuJsap%2FUx2DwC4EmNCUilauohFM7eG3x6S9TAIgXR%2FiGeZuoumap%2FDwGNSrZjGp9LqwvOSfUbQfo6JrH6gq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDE2%2FC0tTXgnZaCAaWircA62x5jmtY6z4ztsrxe3KIzp8DDwSsgjgfPef%2FpyVEpTWj5qF3Qpjh1XdDTBajE%2FwQoXZoz3YAeXUZEqLAeJ8L5Btghq0QeWM%2Bu1B9FB1tVgv%2B4F%2Fw4EX83NU9BDj%2BaSyOYTeTUajwOmU51WpVycKv87owpM8drB5ciM%2F1meRehKI8NtFwbFnUFgsd%2BUPHcFuYV%2FhxR6V2JaPohe7MEqrxxlaWnr0iiizE6pApj3%2FblQB%2FMhLFwBq%2BgpACgQRkl0xgMRLb6DMpVEwVHWhYrj5C9KTF7qyZ1pzC2eqqMBnONtpmhYyex6UZ3huzsu7YHTEd0giETHGtJeUUSKd1t%2FFyhF16F0X%2BHvE8IRO7EkCGkgprtunMOaXdIjlIPhSihoMmG2ingSuOVIbcWrRVMXw5yv%2B84z9sr4sHu3sO%2F%2B7H7HWJC3CZ62aMywkWJNjRXT9H4Iwkffo3P0l0aHHPih%2BQGI8P73LMcyHwriPLKGxzdDEEWX4VQQ%2BNf9%2BDte%2BG1aocNFGkTWf1IyLt4eTblMFwqwks65EsKugEcFadQF3QXdkNHODUy15uHC%2FaX6FD%2Fde9nqpmvVw15iZ40BLWfHCoZx7aZ4YxtycS5Pzk4NmaKsJC04r2oe8d8L1mgVFMMm3icoGOqUBx524nFkxNihvsDhRfbMG%2BldRh4ebTP5HkN9vtjAx36xe%2FMGhVchWbBgbz69%2FSWVh8hCC5xkYLgy0A4rxuSQf050KhkNKFNLWNxo1m%2BAIVjoH%2BsFfQftmi2AwDGmJiG8G58SEUL5gce77u6qIbU5kSWXz3m%2F%2F%2FojGvLKLrOphacaK2z6HGsTGf4SGp%2Be0aHJ1fCHtCsOM4G21b371L9je%2Bgu0hMcB&X-Amz-Signature=4c0c5fdc2b42176646b09a0fb71a8abc888ea13985ca40bbf3f4248606643b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOQUGVN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYuqlzBuJsap%2FUx2DwC4EmNCUilauohFM7eG3x6S9TAIgXR%2FiGeZuoumap%2FDwGNSrZjGp9LqwvOSfUbQfo6JrH6gq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDE2%2FC0tTXgnZaCAaWircA62x5jmtY6z4ztsrxe3KIzp8DDwSsgjgfPef%2FpyVEpTWj5qF3Qpjh1XdDTBajE%2FwQoXZoz3YAeXUZEqLAeJ8L5Btghq0QeWM%2Bu1B9FB1tVgv%2B4F%2Fw4EX83NU9BDj%2BaSyOYTeTUajwOmU51WpVycKv87owpM8drB5ciM%2F1meRehKI8NtFwbFnUFgsd%2BUPHcFuYV%2FhxR6V2JaPohe7MEqrxxlaWnr0iiizE6pApj3%2FblQB%2FMhLFwBq%2BgpACgQRkl0xgMRLb6DMpVEwVHWhYrj5C9KTF7qyZ1pzC2eqqMBnONtpmhYyex6UZ3huzsu7YHTEd0giETHGtJeUUSKd1t%2FFyhF16F0X%2BHvE8IRO7EkCGkgprtunMOaXdIjlIPhSihoMmG2ingSuOVIbcWrRVMXw5yv%2B84z9sr4sHu3sO%2F%2B7H7HWJC3CZ62aMywkWJNjRXT9H4Iwkffo3P0l0aHHPih%2BQGI8P73LMcyHwriPLKGxzdDEEWX4VQQ%2BNf9%2BDte%2BG1aocNFGkTWf1IyLt4eTblMFwqwks65EsKugEcFadQF3QXdkNHODUy15uHC%2FaX6FD%2Fde9nqpmvVw15iZ40BLWfHCoZx7aZ4YxtycS5Pzk4NmaKsJC04r2oe8d8L1mgVFMMm3icoGOqUBx524nFkxNihvsDhRfbMG%2BldRh4ebTP5HkN9vtjAx36xe%2FMGhVchWbBgbz69%2FSWVh8hCC5xkYLgy0A4rxuSQf050KhkNKFNLWNxo1m%2BAIVjoH%2BsFfQftmi2AwDGmJiG8G58SEUL5gce77u6qIbU5kSWXz3m%2F%2F%2FojGvLKLrOphacaK2z6HGsTGf4SGp%2Be0aHJ1fCHtCsOM4G21b371L9je%2Bgu0hMcB&X-Amz-Signature=53d038c875a3ca68ac0d954092709a88a2c707c604e9c9c87ab67a904c25c30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

