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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDYNVI6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FPaJRGPIACb%2FleTCgYviysvtSnKCJsarjS4fwWFRavQIgL8fyyqqagkOKdd8ySEhIquFsubvGJchnfVNSjli55pwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBH%2FexI9%2B7vHWsjdgCrcA%2BQuOHHAQUNrXVWzS1Q%2FphdVvZAY48RADKXRYkznL7aljX01OPm%2Fs8xc%2BIDFwcUEh7wHki%2BWIGI7CtuKr90oK5lMohZrUDiMMVOWvTxQATU5P2WP9kf381YilOddQGNDbKWdegDqbhXbpR48NKS9VNlBvtS3VuyYyfCjttS16e0lkPfdyLEy6olndB4AGBHIIT2fZ0sQ%2Fei1o1t6d5DFfmV1mXkz3TdXsjciBJguRzIKTVBBWNXk1ShSBehfY8gQ%2FDc2t9JqLePYylecxmoir8cTFQbbHINW9gwRG7wM%2FRdNkKgqgB%2FaEswAMWrXRznteGtjV58TTAtOukTko0leB5THUc45GEofolNai5y0REYY2H4RGZO54AnD%2BwHu4VlQgCDPaesRMS5xXzx8%2BoMfsSg1a9I5vmID%2F3eY8viMEsuCETAdrtebt%2BDSPYoGxf9Jaol8I%2Fu%2BpMvr1fu3T%2BxLiXvrE6YCAJiF07dDPSmImOOzYsGPn%2Bh0eahrTV2QhKk2oUM91AScwWn9ZjuDMMgYmi6g2hHPqne4Z6E9rhbCX8uBl6la46olgMoTr6sf1SR3odqdCe%2F91yZZrE795RT1LnMr%2FqAeBDnD17PRFYqHKRkd%2FKHN%2BeP66B8KIp0XMPuei8oGOqUBe%2B8dRK5GFdLuOX73kzCrYwyyL3oKlNZjp7p76uKE8sNRrDd7fn4IJKHKL2glAzCER4jtPPNhLT8QweqlT6xLOPR3CVvuJLPQzSnIEMDTBOs1eg3s5WldJEC53KqRta7SYQw0WikPO7qZZvntAnsbS4rSgGLnpzlMCz38zfpKA8kqBW%2BjdpTrGUFXU5q5Ya1dUyLNxZLnfd6mHS2axHA5IHvxMCgW&X-Amz-Signature=485807859676d590d150e7a9476d8853b5ed3a996e24d7d0df7a2f3c4f87f75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDYNVI6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FPaJRGPIACb%2FleTCgYviysvtSnKCJsarjS4fwWFRavQIgL8fyyqqagkOKdd8ySEhIquFsubvGJchnfVNSjli55pwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBH%2FexI9%2B7vHWsjdgCrcA%2BQuOHHAQUNrXVWzS1Q%2FphdVvZAY48RADKXRYkznL7aljX01OPm%2Fs8xc%2BIDFwcUEh7wHki%2BWIGI7CtuKr90oK5lMohZrUDiMMVOWvTxQATU5P2WP9kf381YilOddQGNDbKWdegDqbhXbpR48NKS9VNlBvtS3VuyYyfCjttS16e0lkPfdyLEy6olndB4AGBHIIT2fZ0sQ%2Fei1o1t6d5DFfmV1mXkz3TdXsjciBJguRzIKTVBBWNXk1ShSBehfY8gQ%2FDc2t9JqLePYylecxmoir8cTFQbbHINW9gwRG7wM%2FRdNkKgqgB%2FaEswAMWrXRznteGtjV58TTAtOukTko0leB5THUc45GEofolNai5y0REYY2H4RGZO54AnD%2BwHu4VlQgCDPaesRMS5xXzx8%2BoMfsSg1a9I5vmID%2F3eY8viMEsuCETAdrtebt%2BDSPYoGxf9Jaol8I%2Fu%2BpMvr1fu3T%2BxLiXvrE6YCAJiF07dDPSmImOOzYsGPn%2Bh0eahrTV2QhKk2oUM91AScwWn9ZjuDMMgYmi6g2hHPqne4Z6E9rhbCX8uBl6la46olgMoTr6sf1SR3odqdCe%2F91yZZrE795RT1LnMr%2FqAeBDnD17PRFYqHKRkd%2FKHN%2BeP66B8KIp0XMPuei8oGOqUBe%2B8dRK5GFdLuOX73kzCrYwyyL3oKlNZjp7p76uKE8sNRrDd7fn4IJKHKL2glAzCER4jtPPNhLT8QweqlT6xLOPR3CVvuJLPQzSnIEMDTBOs1eg3s5WldJEC53KqRta7SYQw0WikPO7qZZvntAnsbS4rSgGLnpzlMCz38zfpKA8kqBW%2BjdpTrGUFXU5q5Ya1dUyLNxZLnfd6mHS2axHA5IHvxMCgW&X-Amz-Signature=b1c0b298b65853acbd503c1f876d1ffc594ab3407c350bfcc541574520c60123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

