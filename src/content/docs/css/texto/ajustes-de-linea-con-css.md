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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHEZHC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbxNuOKPPnsrc%2BfBDIoduwub3pKs%2FBcpRC%2FTUR65YySQIgQ4Aop3LkLTkcnqeqO5VJ%2F%2BN32900EuArxSdwY7e5NIMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDB%2B46CUp9K5ksfY6vircA9mStVEusDUFRAFoaWnF7d0qWrzdxmNT%2F9w%2BL5cuhTfMICKRPsYiIquOMA7xVSbSZsdCmlCvX4iWmC%2BD3%2FkQ8FbblHhXztX6mgj0B1dvj2ODdZtLZyudQf%2BAfr8zz%2BKwBdm%2Fw0b2%2F7y3fXdy65lhiD%2BcuF3bhaXC4P8bP6ELs7DcybBYBd60tMPmUrMAOlAckNy3S9WhccqGjCpvcs7s%2Byc6D4d%2Fde5YpH9W6BglMzVGNGYPTXLREFJ3sYrZQiGQuaH6CcQj6zvVdBJFx255iXaza5Re0ZoN%2BDDWJDO%2Fpm8yUWY1v14LKAExcnsRwpj%2BayPCDsVZsgaA2u7bfUvDR5Y8G%2F1ASrNWAWm437pzoi0U0cRsWTdOTVmf3tjsuBsjVT9%2FhXIJka%2FcQJWQj3FK0zcnmOy1kd2kERqeOZKdEjap9mUfOb7VjSZA0Hhlg9FaXj6JEoMT9fek3dMUvMOpWFkEFs1tXCG74nGkRkegX6NqaZkQ5ZzYGoL0d6ZrK86g3TZOrRHtHtiFDqMy0CYjAQL%2BCBq17LhokTC8edCaoN2ipiGH%2B9XQfMnZrJ3qqMb9Wtblf60rr%2Fq0G6YssVODy9stXcHxFEblMBdC0RBXKHcpJ9X3RGjMlDv6%2Bn07MK24icoGOqUBe6CpCRuZ2VL0L4P%2BAYFopT6ch1ZXxz0bgOFTFACO8iv6Te%2FWGc01iR0BozzsQtyxtXjBuvVcLwxJMMAKIe8B8q98VOlvMdZqbiaYR24e%2BZZRrjgY0xjWBJSHhRzoB92uk%2Bq4Qide%2FMf9l0OCh%2BWvnODiHS6IL5mhnd%2Ba6XkJfAQrQ%2BSFxuyJdsXYhjWYzau5myT8TBIBwPjaz9puCRjcThyKxcy%2B&X-Amz-Signature=e81cdf842839fbccef5c9853a6282c4504236fd639d9fa8501bacf6a32718449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYHEZHC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbxNuOKPPnsrc%2BfBDIoduwub3pKs%2FBcpRC%2FTUR65YySQIgQ4Aop3LkLTkcnqeqO5VJ%2F%2BN32900EuArxSdwY7e5NIMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDB%2B46CUp9K5ksfY6vircA9mStVEusDUFRAFoaWnF7d0qWrzdxmNT%2F9w%2BL5cuhTfMICKRPsYiIquOMA7xVSbSZsdCmlCvX4iWmC%2BD3%2FkQ8FbblHhXztX6mgj0B1dvj2ODdZtLZyudQf%2BAfr8zz%2BKwBdm%2Fw0b2%2F7y3fXdy65lhiD%2BcuF3bhaXC4P8bP6ELs7DcybBYBd60tMPmUrMAOlAckNy3S9WhccqGjCpvcs7s%2Byc6D4d%2Fde5YpH9W6BglMzVGNGYPTXLREFJ3sYrZQiGQuaH6CcQj6zvVdBJFx255iXaza5Re0ZoN%2BDDWJDO%2Fpm8yUWY1v14LKAExcnsRwpj%2BayPCDsVZsgaA2u7bfUvDR5Y8G%2F1ASrNWAWm437pzoi0U0cRsWTdOTVmf3tjsuBsjVT9%2FhXIJka%2FcQJWQj3FK0zcnmOy1kd2kERqeOZKdEjap9mUfOb7VjSZA0Hhlg9FaXj6JEoMT9fek3dMUvMOpWFkEFs1tXCG74nGkRkegX6NqaZkQ5ZzYGoL0d6ZrK86g3TZOrRHtHtiFDqMy0CYjAQL%2BCBq17LhokTC8edCaoN2ipiGH%2B9XQfMnZrJ3qqMb9Wtblf60rr%2Fq0G6YssVODy9stXcHxFEblMBdC0RBXKHcpJ9X3RGjMlDv6%2Bn07MK24icoGOqUBe6CpCRuZ2VL0L4P%2BAYFopT6ch1ZXxz0bgOFTFACO8iv6Te%2FWGc01iR0BozzsQtyxtXjBuvVcLwxJMMAKIe8B8q98VOlvMdZqbiaYR24e%2BZZRrjgY0xjWBJSHhRzoB92uk%2Bq4Qide%2FMf9l0OCh%2BWvnODiHS6IL5mhnd%2Ba6XkJfAQrQ%2BSFxuyJdsXYhjWYzau5myT8TBIBwPjaz9puCRjcThyKxcy%2B&X-Amz-Signature=fedfee8ad5f259cab16ad0963b20c4df17df6727ae95519f0905838976b03d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

