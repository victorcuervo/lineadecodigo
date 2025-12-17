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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLMBZKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICot5i52MjZa3JR3ozUvmG1frQ0nTQHijVcGt0pwxxEjAiEAgioUINSHkGl6%2BXxH3ju6S7ZLxCRGvERubDZVnMaz4poq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF0Jckzc%2BrcAefYJ6ircA3Ccs6PRLWfxLFY%2BKvVV5DsnkJcoe53vSNV557KyeuqPbWlVwqGeDywdqGVVumKDzuFsZjoVo8JwFEAH%2FaMb7rEcyztTThd%2BP8nLGQ4cRCrNE8D5M01GOmTI3Vuy2q7TeGxrmGV%2BCxzRFK3yHMCaBZEP%2F3D4hmfqit3X3bf2zZhyHwTmY0bVvw%2FfALZBtaxSjfYt1wXwtdl%2FC8O%2FepFxHyzNkepJad%2BRZX8ZLL3s1obvyX7UOUA7hDtU7p2NYzju2Nb6p3ZI3fHZgr1OW9YxMl2B8Rkr1Gd70eAVkwkMVPPW1DkFVI%2BkIvlwwHv%2BuMEYGzhLeWR3QUBvnsVSdBjGzUpDBuO%2BhLdXAYNje5M50zPL13SYDbuFo%2BbOseDH5S0QcjejxKYfRAyy6wofSoXVL6U6i8pcKqX9HPmsJACMlepUo20Wqq2Jip4EqOHejmsD9%2Bv0RbpziprKcADep58WemzcLERqaeC1RLNMXME3uGZu%2FwcdguxRu05ZhqAOYTmljm0F9IjY954Z2I2vFhTAerwWYsOsVGry6gBVWHRgdj0p3gFEGhPNXSReM0hmNn1M2dKwEPA82%2Fxg%2F2qdnCN7kBIOeFaW7JXUbIhfXvSDYolA%2BKkxEOyhpF%2BTjGKSMO23icoGOqUBg1EhK4nH%2FiJcIb01Gm8EAc8dDY%2BzW6FqgQDziOU4uJW8FtICS51t7vefbqrlCMNoKdWsX6VHACgvwcRr1fq4QUzWaXyRfqT37DVumbgGjgwHDd2V20GDs3Rf5AjkxJx4z%2FSB%2B4bMm9Ih7jYk9Z31djFCgdG09fzeXMyNfvBHmBgjFwncxEDPVd7Vamk1%2BxExLkI8VXCL3%2FP4jcipMjtaQkbpSlPm&X-Amz-Signature=d70878c9b48af79d0d93fbaf82db93bd39fffb61eba42048758fe123e6576ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLMBZKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICot5i52MjZa3JR3ozUvmG1frQ0nTQHijVcGt0pwxxEjAiEAgioUINSHkGl6%2BXxH3ju6S7ZLxCRGvERubDZVnMaz4poq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF0Jckzc%2BrcAefYJ6ircA3Ccs6PRLWfxLFY%2BKvVV5DsnkJcoe53vSNV557KyeuqPbWlVwqGeDywdqGVVumKDzuFsZjoVo8JwFEAH%2FaMb7rEcyztTThd%2BP8nLGQ4cRCrNE8D5M01GOmTI3Vuy2q7TeGxrmGV%2BCxzRFK3yHMCaBZEP%2F3D4hmfqit3X3bf2zZhyHwTmY0bVvw%2FfALZBtaxSjfYt1wXwtdl%2FC8O%2FepFxHyzNkepJad%2BRZX8ZLL3s1obvyX7UOUA7hDtU7p2NYzju2Nb6p3ZI3fHZgr1OW9YxMl2B8Rkr1Gd70eAVkwkMVPPW1DkFVI%2BkIvlwwHv%2BuMEYGzhLeWR3QUBvnsVSdBjGzUpDBuO%2BhLdXAYNje5M50zPL13SYDbuFo%2BbOseDH5S0QcjejxKYfRAyy6wofSoXVL6U6i8pcKqX9HPmsJACMlepUo20Wqq2Jip4EqOHejmsD9%2Bv0RbpziprKcADep58WemzcLERqaeC1RLNMXME3uGZu%2FwcdguxRu05ZhqAOYTmljm0F9IjY954Z2I2vFhTAerwWYsOsVGry6gBVWHRgdj0p3gFEGhPNXSReM0hmNn1M2dKwEPA82%2Fxg%2F2qdnCN7kBIOeFaW7JXUbIhfXvSDYolA%2BKkxEOyhpF%2BTjGKSMO23icoGOqUBg1EhK4nH%2FiJcIb01Gm8EAc8dDY%2BzW6FqgQDziOU4uJW8FtICS51t7vefbqrlCMNoKdWsX6VHACgvwcRr1fq4QUzWaXyRfqT37DVumbgGjgwHDd2V20GDs3Rf5AjkxJx4z%2FSB%2B4bMm9Ih7jYk9Z31djFCgdG09fzeXMyNfvBHmBgjFwncxEDPVd7Vamk1%2BxExLkI8VXCL3%2FP4jcipMjtaQkbpSlPm&X-Amz-Signature=303d9c41ca64a7bc3385e7ccafcc1fc46a93516817c62a80c5a0b9908c16fb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

