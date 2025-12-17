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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664WTQ4JC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkcmhe9eisnigN1Rq5bhOB4HPRWY8576rRpJ5aUvLQjwIgCAK6qHblOT25q5YGOx6s0W8cV9FvO3dZNn7w8Y%2F562gq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNwkqA7b779QVYc8nircA4P5Y69JO2aLb8qQQwwPIAhlHeEKc34HtK4n0Wcg3TnJa%2B7Z4dHU6LmIv5zkN9rvv98075JaltpEXxKzcAFGVE7wMtXYhxdd9pNSIoGo5VUafrz3RdglnLX%2Bz%2FsKK3FkxnkB2BAzjdM3g%2B0weycTNuMx2m0a%2FKXK0cdIpEpUNOp%2FhUmtQ5Juo9LL91su4cJYRLfUWFKYn1tYdOf7FopyPfarI4ajFw8%2BxqcY%2B6PDOdLQ7ZSt5kBB7vRWJT6MC%2B6dTD5su7ZNGpAMhVjgFubQw3PGrnRaZZkmXSZY4pCa3DX3YcmqjhT7JN4wvyGzutvl52pHUBtDch9msOy52CEDnBHR6HobidS8FM%2FXnViOKlR4lz1H%2Br5we6T0ya3ZfaVk%2F5P6iVjOz%2FEbgPY3oX2O3Y%2BX%2BpaeHaLPb1L5GWNab%2BVJeCxGC2fgiZgwmyZk8hfPDY4sg6mzgqkD5crWWUjdRM56Wrclx7Vf3uPSMNKcn4a0%2BvUSM5dcomyQ3ZSEcJSBjlgJSaTFQCeiKRy2ZEc%2BOGnFeZ%2FTOW8EK0BANkeuM5B%2BFM4ORpLjx2mXlZlWxptWTs2B1DJlATfzlMR7RmuXxPkASa%2BLXffl%2FGz9eoXe6aVArhHJCmsbAf3Rfr46MNKCicoGOqUBYAKBt%2Brp9ddD%2Bace1LP8em2ggLWcYb7W4gRSD80hYHALtP%2FZjeQDxq2Hdl6wHjJ96tgDV%2FNlIgQaFw0jijPPcZ9kycvYu6bjvL8GVLVYVj2j1qt0rIz19UqAm7MqLsaDq%2FcIOJvWewbshu%2FvIqcWrlszaYZYWvdAgOxmOVFrowUNowlEHwAlJP7qlDt3AHfQsIAHWaakQW3wRCQ27j%2FhLB7tqBWH&X-Amz-Signature=90c36d86c3b2dbafb1151039c442e83bed569dfebbbc8ca37b0b6b02206cdc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664WTQ4JC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkcmhe9eisnigN1Rq5bhOB4HPRWY8576rRpJ5aUvLQjwIgCAK6qHblOT25q5YGOx6s0W8cV9FvO3dZNn7w8Y%2F562gq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNwkqA7b779QVYc8nircA4P5Y69JO2aLb8qQQwwPIAhlHeEKc34HtK4n0Wcg3TnJa%2B7Z4dHU6LmIv5zkN9rvv98075JaltpEXxKzcAFGVE7wMtXYhxdd9pNSIoGo5VUafrz3RdglnLX%2Bz%2FsKK3FkxnkB2BAzjdM3g%2B0weycTNuMx2m0a%2FKXK0cdIpEpUNOp%2FhUmtQ5Juo9LL91su4cJYRLfUWFKYn1tYdOf7FopyPfarI4ajFw8%2BxqcY%2B6PDOdLQ7ZSt5kBB7vRWJT6MC%2B6dTD5su7ZNGpAMhVjgFubQw3PGrnRaZZkmXSZY4pCa3DX3YcmqjhT7JN4wvyGzutvl52pHUBtDch9msOy52CEDnBHR6HobidS8FM%2FXnViOKlR4lz1H%2Br5we6T0ya3ZfaVk%2F5P6iVjOz%2FEbgPY3oX2O3Y%2BX%2BpaeHaLPb1L5GWNab%2BVJeCxGC2fgiZgwmyZk8hfPDY4sg6mzgqkD5crWWUjdRM56Wrclx7Vf3uPSMNKcn4a0%2BvUSM5dcomyQ3ZSEcJSBjlgJSaTFQCeiKRy2ZEc%2BOGnFeZ%2FTOW8EK0BANkeuM5B%2BFM4ORpLjx2mXlZlWxptWTs2B1DJlATfzlMR7RmuXxPkASa%2BLXffl%2FGz9eoXe6aVArhHJCmsbAf3Rfr46MNKCicoGOqUBYAKBt%2Brp9ddD%2Bace1LP8em2ggLWcYb7W4gRSD80hYHALtP%2FZjeQDxq2Hdl6wHjJ96tgDV%2FNlIgQaFw0jijPPcZ9kycvYu6bjvL8GVLVYVj2j1qt0rIz19UqAm7MqLsaDq%2FcIOJvWewbshu%2FvIqcWrlszaYZYWvdAgOxmOVFrowUNowlEHwAlJP7qlDt3AHfQsIAHWaakQW3wRCQ27j%2FhLB7tqBWH&X-Amz-Signature=44a437ff1443367820b374906a8becfcc13d01c33daf1b598b62d81088d81bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

