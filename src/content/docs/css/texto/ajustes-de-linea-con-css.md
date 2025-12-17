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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MJL4P2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJdQsqwePMJ5s%2B3%2ByeT7TnzB0IDJCJbjlv%2Bt5uExKLVwIgYulteXhU3DfgkfBpw7oTL2IXsfW2DvhrBWs1rkKneAcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9uF7DHIGK7q%2BkjWCrcAwwqkkoR5SK4KXVMAh8G6pUZP5FsP85OSrm3DLRFse13hMamFP2MWKt0UmM%2BoyAqv%2BjaoUyPFHXlLOrOetQuydn795%2FnntToUyycb3eF4Mi7i%2FiLV6JfHzJA66h6svluaPttwuCu2%2B%2B%2FDMqhm5qNFVIwRB91Qj8AQPf2dx8s6eTddPCoJwd5yJEWCLATRn%2BDE3g40dczxZPS8eMqDWvyLYx%2BnNiCfqDJByfwNi2K3s%2BFLDEwlJ3YRWAe0K6MBXtpbGgPWUB%2FJ2BUSSEouDKgRLJg6%2BaYfeSceA05zOqdngEV6xneRC59A6KjC8Zi3zC%2FTdXj9XclVeU0xryJqLdC17EuZYJepZQuJGjtpe01c7gL3jtX6tfGxfjNBtx%2F74mQd%2BnIagPeeYSA2u3hCzZLqNbT1TwScBHxBmk5irFCksrzp7CIPlEKc0U3FgkuSmtxhIGGJgjfEzon1oyqrf6EJmsAfhRUh1eAMyIW2pFmT69rxi9GhZqH0ukd1twbauS0EtP366lYDL4kCN%2FMay1RH1V5DmaE5YENIAcFiuE6DdTsx3hpau8YAosgeSUzipvY6cUA2oTFk2JOXtPNIiwUNK0eSBkgAyCGqhd%2Fpey38ZZQsh8%2F1zHJcHfrgr4HMNOfi8oGOqUB8wzpn5HvQ9BLeBmKXhrtUL9KNuusBi8VnTV1VOuAeg3lmkPLRUX3CMU9JBchy9qgsCqz90h3oeI5JbLcLR7lK025Hkw2NYkocWf%2Bl0mnRBidkDfAAM%2BvVSMEn6UnglK3rQVLrDi6tWEEwXYnGYiS17iFgpQcJh4iZcjaLG6%2BTyzCQIZSShRr06du8EFz1u9QfJJvaqNA%2FKXn4LMW5JhRh7qW4Pej&X-Amz-Signature=d5ef55f7ead185a355ad29dafc90065ec75aeaa1ff790115399b3175ed45ca77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MJL4P2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJdQsqwePMJ5s%2B3%2ByeT7TnzB0IDJCJbjlv%2Bt5uExKLVwIgYulteXhU3DfgkfBpw7oTL2IXsfW2DvhrBWs1rkKneAcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9uF7DHIGK7q%2BkjWCrcAwwqkkoR5SK4KXVMAh8G6pUZP5FsP85OSrm3DLRFse13hMamFP2MWKt0UmM%2BoyAqv%2BjaoUyPFHXlLOrOetQuydn795%2FnntToUyycb3eF4Mi7i%2FiLV6JfHzJA66h6svluaPttwuCu2%2B%2B%2FDMqhm5qNFVIwRB91Qj8AQPf2dx8s6eTddPCoJwd5yJEWCLATRn%2BDE3g40dczxZPS8eMqDWvyLYx%2BnNiCfqDJByfwNi2K3s%2BFLDEwlJ3YRWAe0K6MBXtpbGgPWUB%2FJ2BUSSEouDKgRLJg6%2BaYfeSceA05zOqdngEV6xneRC59A6KjC8Zi3zC%2FTdXj9XclVeU0xryJqLdC17EuZYJepZQuJGjtpe01c7gL3jtX6tfGxfjNBtx%2F74mQd%2BnIagPeeYSA2u3hCzZLqNbT1TwScBHxBmk5irFCksrzp7CIPlEKc0U3FgkuSmtxhIGGJgjfEzon1oyqrf6EJmsAfhRUh1eAMyIW2pFmT69rxi9GhZqH0ukd1twbauS0EtP366lYDL4kCN%2FMay1RH1V5DmaE5YENIAcFiuE6DdTsx3hpau8YAosgeSUzipvY6cUA2oTFk2JOXtPNIiwUNK0eSBkgAyCGqhd%2Fpey38ZZQsh8%2F1zHJcHfrgr4HMNOfi8oGOqUB8wzpn5HvQ9BLeBmKXhrtUL9KNuusBi8VnTV1VOuAeg3lmkPLRUX3CMU9JBchy9qgsCqz90h3oeI5JbLcLR7lK025Hkw2NYkocWf%2Bl0mnRBidkDfAAM%2BvVSMEn6UnglK3rQVLrDi6tWEEwXYnGYiS17iFgpQcJh4iZcjaLG6%2BTyzCQIZSShRr06du8EFz1u9QfJJvaqNA%2FKXn4LMW5JhRh7qW4Pej&X-Amz-Signature=6a242828e810dc3450426ad115572ba8e260be34c812389de0fd0766c43ac951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

