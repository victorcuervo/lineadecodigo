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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRVEKFV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWFU2HJ%2FF1WjArzRoUQzuc8tCiks5nRnfXA6xWEP61FwIhALmzSEeWgw7QyJJQTIXnl5MelkgUD9QruaVwg4BVmVa0Kv8DCH0QABoMNjM3NDIzMTgzODA1Igz39%2FrH%2BcvDAOxJu1Aq3APcBIAcBlvXk4LnC%2F3FsIFg5fSpmamWziX309HoYmf4EBZNgQ%2F9mjdXAb%2FFCgIUVLK6P7ltp4MHVXWW1MtFEo8AxL2IsyLriZtOfhzCSRoe6Jwzagsslk19KuRUEnsL%2BA8ySQo2Jr7Lgr1eH%2BWsTL9X4SbiqcEyqVdBICVF6teLCXPOvJjE1cT9i0SWH1rPJe2LQJxoFrC3zcWIIOqDDNRogZkgs7EOU2YxlOsgKNW4tvzohzO49jtAGrQ%2B%2Fw1Edyp8fjthqxXOyyu3punPuPwGciDUXj7qljEeJI5VNtajxP%2FYDYAl8nIwGa%2F7qApa%2BVpF3X7LImbrx4X7EAihdcgk9hqfMDZIJwVO9Gcz38d9i%2F8S72IgeXhY%2F%2FqjNXPmmWicTiqaLSLzCvrArRNSjHY%2BpwBMUyz1I3x2pidSamqhuR9rUSzj%2BPznyQ8N4u6rxkn62JaQ79FXmj%2Bl6%2BdEADJMBKNgJL7TldWYujYghkJ1X91u4f4eik6TXZyNpf6IYuapMRm8dHq8t1Un%2FIJBFa5zTSITUFZV1TATCnuCPCwyRZuBwxbg42lWLW%2BqmVCd2zzYzj26J778%2FB1uHdd4laW4TMNW2cpJ%2Bjhg1n7u3uzTMMloI0XomVYD%2BdcZJTDSqorKBjqkAbypBjMsopUS4ihV4yM0uBpbAGl4YArj0F9zeHpx%2BybDNqCosPH7DvS%2BG5IDR2iLVxmkWYK36WSAzJhsrnBLqHRa8X1Ccle2nihq%2FVXzrotLTevteW%2BYdug6rbRwS6V1URvKEkoHXwTJFtf3yeCBX0munSCkITJ5E8Rw9AVFs245DktaQ0RClKqr1jy38nMjIcusl5GyxBLzDSCxML75as9ffeeh&X-Amz-Signature=379f98e41daca59ce9fd6119f5adb32f9bc5303303c069cb9025f09ae44eaa20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRVEKFV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWFU2HJ%2FF1WjArzRoUQzuc8tCiks5nRnfXA6xWEP61FwIhALmzSEeWgw7QyJJQTIXnl5MelkgUD9QruaVwg4BVmVa0Kv8DCH0QABoMNjM3NDIzMTgzODA1Igz39%2FrH%2BcvDAOxJu1Aq3APcBIAcBlvXk4LnC%2F3FsIFg5fSpmamWziX309HoYmf4EBZNgQ%2F9mjdXAb%2FFCgIUVLK6P7ltp4MHVXWW1MtFEo8AxL2IsyLriZtOfhzCSRoe6Jwzagsslk19KuRUEnsL%2BA8ySQo2Jr7Lgr1eH%2BWsTL9X4SbiqcEyqVdBICVF6teLCXPOvJjE1cT9i0SWH1rPJe2LQJxoFrC3zcWIIOqDDNRogZkgs7EOU2YxlOsgKNW4tvzohzO49jtAGrQ%2B%2Fw1Edyp8fjthqxXOyyu3punPuPwGciDUXj7qljEeJI5VNtajxP%2FYDYAl8nIwGa%2F7qApa%2BVpF3X7LImbrx4X7EAihdcgk9hqfMDZIJwVO9Gcz38d9i%2F8S72IgeXhY%2F%2FqjNXPmmWicTiqaLSLzCvrArRNSjHY%2BpwBMUyz1I3x2pidSamqhuR9rUSzj%2BPznyQ8N4u6rxkn62JaQ79FXmj%2Bl6%2BdEADJMBKNgJL7TldWYujYghkJ1X91u4f4eik6TXZyNpf6IYuapMRm8dHq8t1Un%2FIJBFa5zTSITUFZV1TATCnuCPCwyRZuBwxbg42lWLW%2BqmVCd2zzYzj26J778%2FB1uHdd4laW4TMNW2cpJ%2Bjhg1n7u3uzTMMloI0XomVYD%2BdcZJTDSqorKBjqkAbypBjMsopUS4ihV4yM0uBpbAGl4YArj0F9zeHpx%2BybDNqCosPH7DvS%2BG5IDR2iLVxmkWYK36WSAzJhsrnBLqHRa8X1Ccle2nihq%2FVXzrotLTevteW%2BYdug6rbRwS6V1URvKEkoHXwTJFtf3yeCBX0munSCkITJ5E8Rw9AVFs245DktaQ0RClKqr1jy38nMjIcusl5GyxBLzDSCxML75as9ffeeh&X-Amz-Signature=ed482cb84317b84a995dfc1270372422596767cdf1be6322147c69ce910edda2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

