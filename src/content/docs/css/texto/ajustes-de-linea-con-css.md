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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGWFT3U5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpdtMOeOv%2BpqfJ6H9DWhJp45KGAPCs%2FB6yydQ8P7FK8QIhAPzrMrhkZDGKo%2B5L7xGnmXbQS9AuKRa%2Bufs6M26KObQaKv8DCH8QABoMNjM3NDIzMTgzODA1IgymIc3uNVGlR98IKi4q3APErU8ZAkqS6l1smv9jxg8ZnjNTtuHv6LJEz%2BiWgGNtzwG88VFYpEotsH%2FrDPMF56Ane%2FkwPqde%2F8EX2BfasJ6oH2kybgtHF9Ux5KqvEeOTbwNGZKuBRKKYPZodhJP6MfpGeNUeYQkM5mq%2BOk%2BONpFmDsac1YxCGav2%2Fp%2FuSioP%2FeduYua0sSPN%2Fp%2BX9mSAl8rcErsdd%2B3Dz08acKurKvDVXxqOIglr8B8fCRnCFzEA26XC0WLcxiYRlpi2xLxWD8wUfGPLVPp8geBIbgwmnaovWAzWDobQ2fSSwKYzlFQRkV7nProy0hs7hzDzSai0p%2BB1cTltGkdFxGTcBIjAVm%2BztIG6kE8AZHEH9DXlr0TJ5sxJZQisfc6X1RohA8UGsiPrFrZmBirmS9cJ9%2BVDKoVdeg%2B%2FZR2%2FpWoaDoQ8nMTHAZcEa7japMLR5vG%2BOx0fVVYvxihUTbTnVgXv5cwi7htoDfHtyOy%2Bj5Y9ZBIbZljHh0NI6oTCgyI2BtGohD946ZVF%2FvO5f%2B8Ch8uZ2iNojlAfzym7OMqyah2lWj2LbVpix4txfHF5a0ndhrxSBYDaAUdIl%2FheBoebcIasPqUkp0K1Wl5aH6b%2FEAqHH5nteOpdMWqR3o%2BLUL3oqNmV5TDc4YrKBjqkAS4EWVq2f4hTZZqJR9hgjm%2FgWXUbN6HeOiZyFNYC4%2FrbJojGdvoDqY%2BS0%2Fr9QCzl%2FJZ09vWncAO5CUR0yjj12b2G9lQEd%2F5sAs2NK56OvLjOAmI5xpCGCgBpsNWoLFtowx24bj8TfqdDupy6%2FEBGBEv0psiMFpFrok3IHdxHmQBgXZAXWrk%2Fl3r5QQ4EIVkoKjNcQEDXnNA6Z19DX18PtEgnon7U&X-Amz-Signature=dc21fc7b184cbe00f240be673b13bf540d0acbf2db90582f3f84bd9c190b4bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGWFT3U5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpdtMOeOv%2BpqfJ6H9DWhJp45KGAPCs%2FB6yydQ8P7FK8QIhAPzrMrhkZDGKo%2B5L7xGnmXbQS9AuKRa%2Bufs6M26KObQaKv8DCH8QABoMNjM3NDIzMTgzODA1IgymIc3uNVGlR98IKi4q3APErU8ZAkqS6l1smv9jxg8ZnjNTtuHv6LJEz%2BiWgGNtzwG88VFYpEotsH%2FrDPMF56Ane%2FkwPqde%2F8EX2BfasJ6oH2kybgtHF9Ux5KqvEeOTbwNGZKuBRKKYPZodhJP6MfpGeNUeYQkM5mq%2BOk%2BONpFmDsac1YxCGav2%2Fp%2FuSioP%2FeduYua0sSPN%2Fp%2BX9mSAl8rcErsdd%2B3Dz08acKurKvDVXxqOIglr8B8fCRnCFzEA26XC0WLcxiYRlpi2xLxWD8wUfGPLVPp8geBIbgwmnaovWAzWDobQ2fSSwKYzlFQRkV7nProy0hs7hzDzSai0p%2BB1cTltGkdFxGTcBIjAVm%2BztIG6kE8AZHEH9DXlr0TJ5sxJZQisfc6X1RohA8UGsiPrFrZmBirmS9cJ9%2BVDKoVdeg%2B%2FZR2%2FpWoaDoQ8nMTHAZcEa7japMLR5vG%2BOx0fVVYvxihUTbTnVgXv5cwi7htoDfHtyOy%2Bj5Y9ZBIbZljHh0NI6oTCgyI2BtGohD946ZVF%2FvO5f%2B8Ch8uZ2iNojlAfzym7OMqyah2lWj2LbVpix4txfHF5a0ndhrxSBYDaAUdIl%2FheBoebcIasPqUkp0K1Wl5aH6b%2FEAqHH5nteOpdMWqR3o%2BLUL3oqNmV5TDc4YrKBjqkAS4EWVq2f4hTZZqJR9hgjm%2FgWXUbN6HeOiZyFNYC4%2FrbJojGdvoDqY%2BS0%2Fr9QCzl%2FJZ09vWncAO5CUR0yjj12b2G9lQEd%2F5sAs2NK56OvLjOAmI5xpCGCgBpsNWoLFtowx24bj8TfqdDupy6%2FEBGBEv0psiMFpFrok3IHdxHmQBgXZAXWrk%2Fl3r5QQ4EIVkoKjNcQEDXnNA6Z19DX18PtEgnon7U&X-Amz-Signature=a2d2dbe963a44afe6e7f9f8684f0451ba4317477d4913b23791bef9c6f314c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

