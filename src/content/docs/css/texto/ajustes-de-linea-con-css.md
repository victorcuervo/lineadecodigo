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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662HSGE6D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxT1HT189%2BNzzIjzMKnZX9zv40ZSuoDZpZb1GWIsgWKgIgTA%2F7FlunNNaEeDBulk9YuiBMCZ9JKlS3tjIWNpmYhCsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKV5XZCSB9t5pH75mircAyTqCqMCf7I1chDIjOYnvaErPuafkelXFP4LQAGdu4rAocQ%2BuuA7FZM1SWfDwmvkaWFVi8ununaeD%2B2JMiNhD9Bo1x%2B12UT56iLo9KZb5KmQBppCneorR7y8f3Z4VjWU3zWxijc%2FJkxCzErmWI2wZkfOcRW6daDo2IosJEwkPV6ZHjsJA5HT5aabuKnancO9NEkh8ioCOJtxN2plRD8HvATK6yWiSnLdcBOhjt8L1s9z5OhjEK0AssZnKbtHnnSobOFbjxzqYmRi%2FWSoPUNInpXArq05p2eswsUnwhNW28g893Y%2B6uQ43oBXb%2FxyxQEjdTN2GSvVVpwJGzNlvw55UXYxTQqw6cbhgNrGvYbqFp6zjXSLmniYu2dQhgo4cUwfAcnhPGhCwvd9eOr0CQygV3%2B%2FRhjgKY%2BsxeZkYriid2VkzBkJ2%2FEVBnt2KlX05Id2gPX4svYotrqLBJvJayfu4%2BV4bAuVLuw%2B3JQzF1UjUnXaHaaV5wVACZO77ZpXMd%2BMt6OjhZWp9OO0FyNtsqlYqIF2wt4a%2FUBarFnQOMEVUU%2BqUEql3iewTZUA6V8fRM0f5CH1Dc1HhGKE4yXLKnonZz7fiSBuxYBbwUCrhzmjXr%2F%2BBgICiIdumR2QVjZ4MLyyiMoGOqUBJzh9ruyxZWPd7UGB1WXoO4pACHIlb9%2FcZhbEnYdJ71pcuFWg7hHaQVhfBrT17vXnny%2BS7SlpEug8FWcANt0Km2vwgoIKheLdkpZxAV6OGugNaoP7%2FGfVhFTeXOGwjA2arfk7CFN2SRYKNAE56rCS5Qmg06Ue9UHKkKl7DinQU%2FFaQnwvluzyDPkCNX%2BTSVGK%2BdkBWtQTLBE9cy%2FRMcGzOr7I7iAe&X-Amz-Signature=bc118bf32cbac6b26b1d64857eeaa423d528742a6d12dc4ced029e183c278530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662HSGE6D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxT1HT189%2BNzzIjzMKnZX9zv40ZSuoDZpZb1GWIsgWKgIgTA%2F7FlunNNaEeDBulk9YuiBMCZ9JKlS3tjIWNpmYhCsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKV5XZCSB9t5pH75mircAyTqCqMCf7I1chDIjOYnvaErPuafkelXFP4LQAGdu4rAocQ%2BuuA7FZM1SWfDwmvkaWFVi8ununaeD%2B2JMiNhD9Bo1x%2B12UT56iLo9KZb5KmQBppCneorR7y8f3Z4VjWU3zWxijc%2FJkxCzErmWI2wZkfOcRW6daDo2IosJEwkPV6ZHjsJA5HT5aabuKnancO9NEkh8ioCOJtxN2plRD8HvATK6yWiSnLdcBOhjt8L1s9z5OhjEK0AssZnKbtHnnSobOFbjxzqYmRi%2FWSoPUNInpXArq05p2eswsUnwhNW28g893Y%2B6uQ43oBXb%2FxyxQEjdTN2GSvVVpwJGzNlvw55UXYxTQqw6cbhgNrGvYbqFp6zjXSLmniYu2dQhgo4cUwfAcnhPGhCwvd9eOr0CQygV3%2B%2FRhjgKY%2BsxeZkYriid2VkzBkJ2%2FEVBnt2KlX05Id2gPX4svYotrqLBJvJayfu4%2BV4bAuVLuw%2B3JQzF1UjUnXaHaaV5wVACZO77ZpXMd%2BMt6OjhZWp9OO0FyNtsqlYqIF2wt4a%2FUBarFnQOMEVUU%2BqUEql3iewTZUA6V8fRM0f5CH1Dc1HhGKE4yXLKnonZz7fiSBuxYBbwUCrhzmjXr%2F%2BBgICiIdumR2QVjZ4MLyyiMoGOqUBJzh9ruyxZWPd7UGB1WXoO4pACHIlb9%2FcZhbEnYdJ71pcuFWg7hHaQVhfBrT17vXnny%2BS7SlpEug8FWcANt0Km2vwgoIKheLdkpZxAV6OGugNaoP7%2FGfVhFTeXOGwjA2arfk7CFN2SRYKNAE56rCS5Qmg06Ue9UHKkKl7DinQU%2FFaQnwvluzyDPkCNX%2BTSVGK%2BdkBWtQTLBE9cy%2FRMcGzOr7I7iAe&X-Amz-Signature=6c06e1980bd3df335dafe1bfa9f935a7c69b83e079b8af1f7b4738ad39938d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

