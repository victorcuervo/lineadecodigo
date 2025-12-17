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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ765PXC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjuXn%2FmxhGJwD0ogPID%2FaBxnCqwdKFgqQ4xUV5q0%2BI7AIhAKccn%2B9cT%2Fiyw4eaMRe%2BL2%2BWa7G5s6hB%2B%2BurUJBpKk7cKv8DCH4QABoMNjM3NDIzMTgzODA1Igx5RCXwJpDFBiZxtnkq3AMvJ6QFVPP729HDnrkBuE1v7IXGHISS%2F75blB2XPt94GuiFktQklCkQHM00WG0gxzORqbzvbFUMIBLO56SzQiaX6IC2zYnVKpgFBQPw3huJlWmZ7kU10uZ0rLBHzYogxVXlvukSL1iYgKtfQhF0nDDItXKJOosYbVYkBXD%2BGkd2tAMHDd8KL8c3uX%2Bd1LwLQ5pAnfiQ921s455%2BiJuGk8Sh07Or%2B%2BDUhdzL3FdIt9Ze67jskkA3yhXXX5EbClm1%2B%2BxalM8MZf%2BOh0utz3KSdcDmzbGXPqdioZ6rKUAT%2F9RYKusz4M4td8fXFgYfGlRf4kmhuvNsapGsFv1nglKLP%2F5WvahUL5Mv2E%2BWUAI4Ir39FrTqgQnBhYvjeUGjUhZrKTiXbfy%2BsPrp5lZVEXeWkAeF6MhE1jJwVXz0OH6LR1l2xESMG29bEcJI0CC0Q7zuD%2FSaNWpBUK8%2FEoETcyLYCIsB7Xv5IMLqs5ppkQ3EepRMQM%2B5QEt9VkOAIR7N3IvsCq7%2F6geAZhS0UEJ2vhHaMMeLV09JXDX3LwEBdbYt3h%2BH8Tse6b4PwFSko1r1VmoU1Nsy4ACGavxlA7%2FFZP1PaM9lhQ35rsGTEJh4JRVFjjYgak7fCCPpoUTpzJTjWjCfxorKBjqkAUjIV%2BXDhZLwhiGjAchEwHpVZ5CYKwTjeu%2FeiKkFsrlqUP9TY4eCsz29oJcdgb2%2BM4tjbovprg3QoJO1JTFG76KLUloVPk9Obf%2FGuUelX9PBK525iljHhERNyCnYJXuIDZy3I%2BwryefUjujuQL4jNc9hkxOPphJfAtlh6TW8Wb7%2Fr5ec6Hmhh%2F2TPBIJGc4U1OTe1E4iv7s%2BtOAP6Ith2j2zmHAu&X-Amz-Signature=80adcf989f4db1e2ad566d8ccf6561c4d5e26fc16b9a6f5ac232e8f83ae72f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ765PXC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjuXn%2FmxhGJwD0ogPID%2FaBxnCqwdKFgqQ4xUV5q0%2BI7AIhAKccn%2B9cT%2Fiyw4eaMRe%2BL2%2BWa7G5s6hB%2B%2BurUJBpKk7cKv8DCH4QABoMNjM3NDIzMTgzODA1Igx5RCXwJpDFBiZxtnkq3AMvJ6QFVPP729HDnrkBuE1v7IXGHISS%2F75blB2XPt94GuiFktQklCkQHM00WG0gxzORqbzvbFUMIBLO56SzQiaX6IC2zYnVKpgFBQPw3huJlWmZ7kU10uZ0rLBHzYogxVXlvukSL1iYgKtfQhF0nDDItXKJOosYbVYkBXD%2BGkd2tAMHDd8KL8c3uX%2Bd1LwLQ5pAnfiQ921s455%2BiJuGk8Sh07Or%2B%2BDUhdzL3FdIt9Ze67jskkA3yhXXX5EbClm1%2B%2BxalM8MZf%2BOh0utz3KSdcDmzbGXPqdioZ6rKUAT%2F9RYKusz4M4td8fXFgYfGlRf4kmhuvNsapGsFv1nglKLP%2F5WvahUL5Mv2E%2BWUAI4Ir39FrTqgQnBhYvjeUGjUhZrKTiXbfy%2BsPrp5lZVEXeWkAeF6MhE1jJwVXz0OH6LR1l2xESMG29bEcJI0CC0Q7zuD%2FSaNWpBUK8%2FEoETcyLYCIsB7Xv5IMLqs5ppkQ3EepRMQM%2B5QEt9VkOAIR7N3IvsCq7%2F6geAZhS0UEJ2vhHaMMeLV09JXDX3LwEBdbYt3h%2BH8Tse6b4PwFSko1r1VmoU1Nsy4ACGavxlA7%2FFZP1PaM9lhQ35rsGTEJh4JRVFjjYgak7fCCPpoUTpzJTjWjCfxorKBjqkAUjIV%2BXDhZLwhiGjAchEwHpVZ5CYKwTjeu%2FeiKkFsrlqUP9TY4eCsz29oJcdgb2%2BM4tjbovprg3QoJO1JTFG76KLUloVPk9Obf%2FGuUelX9PBK525iljHhERNyCnYJXuIDZy3I%2BwryefUjujuQL4jNc9hkxOPphJfAtlh6TW8Wb7%2Fr5ec6Hmhh%2F2TPBIJGc4U1OTe1E4iv7s%2BtOAP6Ith2j2zmHAu&X-Amz-Signature=717a19b7a1378770ddcd3c734c04d7b5a03ecb8f4d1a2d804a1bfffb6dac472b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

