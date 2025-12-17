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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VI7OQ5O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5heEivu7pv4Gmgfn0m177KLMhvK1yJDFBO0Dz2OMhqAiBFldc%2BGjwFRVKZZFITyaUouKaV%2FseEHUpjHCXeWJFuECqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzyQbHWso2tjYqLYVKtwD0f0TQwnXMH2v5ImR%2FM%2F3x%2B8PkiOk%2F4VHTWrcmSA4sFNdjKF7qTLS1Hf11amTY8YDFXgndK%2FHpxYBwoCFowi9Y1hOBtRVtDqN2%2FVChQxYRgAvNcBeDiM0MNRjWe8%2FZ05uM9KLBwU6l%2Bo64lRWxbxQED0bM1fN0GKRwyxQLYjY7c5bzt4ro3nKrhS4x7er4PqaB2%2BSQRWtixekZQrGGMtvjRM3M52SD47QAoB93d%2Fq9jphJPQZ%2Ba4GvQtpPAaHioSo3wHITgkDKw4I5VqSp8xWRKm4Gc%2FU1WhV0%2Ff%2BcHOwU0FVhGmnSCN5AgXDfOFRdvFBmrIGAUMr6UVOApvdgJh%2F%2FpKlpdq%2FlZ1rUfT2t8Z8LQIJX5NH5B5MO7%2FlOarsnPsyncGCznAQzwiUHYWNLLVMgLmWQQu2BZdbehBaOIvN8p8uKxdJVasTmgctu6avI23yOagDybgBfMz%2FnylkpBJnUezNFm7SqL77xiZVxtRWrtfTif%2F6nYkF2T1r3ehuAJVbhlT1wcghKCojPe30DAmvsvttd3im1SU2NiYUJByY3kdBcFjTau2jz%2FjGGa9IkbjAZ7UmO3w7I%2F10fUfh1PwHFU87d5vR%2B%2FIoLn3c5pkv4DHZMQfVLNgJcx3Z8nkwuK6MygY6pgHxVyK5FpRcBPFNAtUICr%2B6wQIKubWLYBegCHLkJh17mwdUMD6pgNZMCp%2BanfIvQQftRa56d7wnohLGkCF0p4Wp%2BTpoeHQmGPnfmubdTXN8QHICNlXtZES%2BtxZBp5uIeWU7ma8KjcDx9SwVZI2WCHrKihjYqlt%2BYBPVDqHWzegB3k%2Bg4q3e6XwqNwN9FpeKoi9dFdYc80dPZC4E55E0wxYI83mQwxp6&X-Amz-Signature=4bada16105d8daeac27472687b1dcf44b9940c7b168f976a93cf9980cc3b0729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VI7OQ5O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5heEivu7pv4Gmgfn0m177KLMhvK1yJDFBO0Dz2OMhqAiBFldc%2BGjwFRVKZZFITyaUouKaV%2FseEHUpjHCXeWJFuECqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzyQbHWso2tjYqLYVKtwD0f0TQwnXMH2v5ImR%2FM%2F3x%2B8PkiOk%2F4VHTWrcmSA4sFNdjKF7qTLS1Hf11amTY8YDFXgndK%2FHpxYBwoCFowi9Y1hOBtRVtDqN2%2FVChQxYRgAvNcBeDiM0MNRjWe8%2FZ05uM9KLBwU6l%2Bo64lRWxbxQED0bM1fN0GKRwyxQLYjY7c5bzt4ro3nKrhS4x7er4PqaB2%2BSQRWtixekZQrGGMtvjRM3M52SD47QAoB93d%2Fq9jphJPQZ%2Ba4GvQtpPAaHioSo3wHITgkDKw4I5VqSp8xWRKm4Gc%2FU1WhV0%2Ff%2BcHOwU0FVhGmnSCN5AgXDfOFRdvFBmrIGAUMr6UVOApvdgJh%2F%2FpKlpdq%2FlZ1rUfT2t8Z8LQIJX5NH5B5MO7%2FlOarsnPsyncGCznAQzwiUHYWNLLVMgLmWQQu2BZdbehBaOIvN8p8uKxdJVasTmgctu6avI23yOagDybgBfMz%2FnylkpBJnUezNFm7SqL77xiZVxtRWrtfTif%2F6nYkF2T1r3ehuAJVbhlT1wcghKCojPe30DAmvsvttd3im1SU2NiYUJByY3kdBcFjTau2jz%2FjGGa9IkbjAZ7UmO3w7I%2F10fUfh1PwHFU87d5vR%2B%2FIoLn3c5pkv4DHZMQfVLNgJcx3Z8nkwuK6MygY6pgHxVyK5FpRcBPFNAtUICr%2B6wQIKubWLYBegCHLkJh17mwdUMD6pgNZMCp%2BanfIvQQftRa56d7wnohLGkCF0p4Wp%2BTpoeHQmGPnfmubdTXN8QHICNlXtZES%2BtxZBp5uIeWU7ma8KjcDx9SwVZI2WCHrKihjYqlt%2BYBPVDqHWzegB3k%2Bg4q3e6XwqNwN9FpeKoi9dFdYc80dPZC4E55E0wxYI83mQwxp6&X-Amz-Signature=b4c081015c764d0459e64e6607057ff12469c8c883fe5dbe268370215a39b9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

