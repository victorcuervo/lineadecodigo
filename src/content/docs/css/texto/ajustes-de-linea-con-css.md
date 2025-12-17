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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZN6P33%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiTGiieRmhNL54PNlHBBBa1Hv2dvR4doUwJufO%2FyePeAiBdC6687hoBN5wCuZtU3DVJ3ARir4M4NbunTHf3%2BU9f8Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMQv%2BKlxNVe9gmmdjbKtwDnBDOxYxYNG%2BKvmlh%2B2xPlKDfGxnGDwJWsccGKYsJy%2B0fSTprlcbyKv%2FpThiYcTumZXHg06dyPWtSVN%2Br5EQNK4VXy2NjQJt2OPc2G2De1NFMBc7eDj3AeKqYol8MpZUqvcQb%2FSUUabyXfNrQ2Jk7IYwU4DbeD3O%2BdQyiLdVzBbTJTkjjkEopPXqcHc%2BWwSXZO0hRoUzzcQ0y9gYORv06yQ7aIND1Ylc2B6L%2F3HYqel1mirMY7klEPvGtJjts%2BXLcaXeReyRyxfCuC7gb24rvut3fhZLFcVtlBWk9jzpqc2btT4th%2BXsZ4CLz5JdpYbDgBg6pLLKc7NShBhWEyx5j9Pxg5ROOwREwc7W1mE1DMS0BxF8kES8YUbCImbJ8yhDmU6t3xDcztN5WbFc39ACkMhnqatbuiHdU%2BjOluB6bMMmrav1Qzs19npHAIk9%2BWnTMfy3N4SHRQKbP26WMOhixnS5t4tb90i71BGtyPCgImPNYo%2FcAb6QOmwlholxEFhcK8vB0CZ%2BWr6aamQa6U4tNbSHfW6nA0rallf7VyTO7HUL85qFza9OhuJ3hIGDwxCUifyaokW6d9H0pg1IqaCX6SHoUuoBspXLmAUdE7HnTWEUNnuUYaE1G%2BHlm43Ew0O%2BJygY6pgE3oaGXpjzrmGmymDrVCZ2nbr93U6JeE8fuwRKsxwozyzFqgBmb3uvurCgx6Se4fBBzvoj6k1sQdQ8bn3XXzUp0c3oKb95LKZZaqkm5fXIXypLpD7Lvt8fhLy2N5I65oWHizRWCzgrWCxtxymGL8Ec%2B6zYDtCVrjirmoEQKZvn7E96bEbKVG%2B7ud9a8xm8OCOWvYybl0RGGmGr7uHaLNr4NVUFAS6BA&X-Amz-Signature=5b8af9e2654bbe33c8f6ffaef1bdd8d5e2daecbcdbd9242d2f36e1f2255ba65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZN6P33%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiTGiieRmhNL54PNlHBBBa1Hv2dvR4doUwJufO%2FyePeAiBdC6687hoBN5wCuZtU3DVJ3ARir4M4NbunTHf3%2BU9f8Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMQv%2BKlxNVe9gmmdjbKtwDnBDOxYxYNG%2BKvmlh%2B2xPlKDfGxnGDwJWsccGKYsJy%2B0fSTprlcbyKv%2FpThiYcTumZXHg06dyPWtSVN%2Br5EQNK4VXy2NjQJt2OPc2G2De1NFMBc7eDj3AeKqYol8MpZUqvcQb%2FSUUabyXfNrQ2Jk7IYwU4DbeD3O%2BdQyiLdVzBbTJTkjjkEopPXqcHc%2BWwSXZO0hRoUzzcQ0y9gYORv06yQ7aIND1Ylc2B6L%2F3HYqel1mirMY7klEPvGtJjts%2BXLcaXeReyRyxfCuC7gb24rvut3fhZLFcVtlBWk9jzpqc2btT4th%2BXsZ4CLz5JdpYbDgBg6pLLKc7NShBhWEyx5j9Pxg5ROOwREwc7W1mE1DMS0BxF8kES8YUbCImbJ8yhDmU6t3xDcztN5WbFc39ACkMhnqatbuiHdU%2BjOluB6bMMmrav1Qzs19npHAIk9%2BWnTMfy3N4SHRQKbP26WMOhixnS5t4tb90i71BGtyPCgImPNYo%2FcAb6QOmwlholxEFhcK8vB0CZ%2BWr6aamQa6U4tNbSHfW6nA0rallf7VyTO7HUL85qFza9OhuJ3hIGDwxCUifyaokW6d9H0pg1IqaCX6SHoUuoBspXLmAUdE7HnTWEUNnuUYaE1G%2BHlm43Ew0O%2BJygY6pgE3oaGXpjzrmGmymDrVCZ2nbr93U6JeE8fuwRKsxwozyzFqgBmb3uvurCgx6Se4fBBzvoj6k1sQdQ8bn3XXzUp0c3oKb95LKZZaqkm5fXIXypLpD7Lvt8fhLy2N5I65oWHizRWCzgrWCxtxymGL8Ec%2B6zYDtCVrjirmoEQKZvn7E96bEbKVG%2B7ud9a8xm8OCOWvYybl0RGGmGr7uHaLNr4NVUFAS6BA&X-Amz-Signature=3ab64401f59d28a5bfac6fa521eede9dff9273739901b2718879a0f88ab02083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

