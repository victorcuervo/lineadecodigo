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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNIWEWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquTlJSgUtz5Sj5KTBdD6WUr5v%2B8ldCLbB9RpBmzTRnAiAwOWDa1xOCXs2aypy21Y2YEaQdysJeTg1B0SIJkNFk0ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxNzC54Qmd1CnLjtYKtwDwvVKRQAUaTFKEuZ%2FegOel8zP8iFoWe21vAkyVFfgXql3kPztghOWKnFiuQTHXcJglNd8P5vZs8cJ7BVAo9xy7ha97w3wke0NzWiMaQQlHzLgMLiO1x3x6B0w9qkCMIbt4drq9OdjjhbH5qaU1ctsLxo9yqnHkZ%2FluWjBPlX4z1my%2F5kAYUCkqXffKW%2F3%2FrFyT7UVpn4lqaWIEKFYzYf%2FgYfF7OzngqgjmTbBZI4HWbubPuZAM3h2cgd58Lki%2BijMdzoM1stt1Q%2BaxVDvPr%2Fhmmbq9Ljcjj8LZ1x33i9MD5I03FYeLxwYUgrA92FXKJuc6ot7LM8xZFH0efEw6i%2FOahryuPng5gwlUaiRRGpvt7IwgGUWhK5RyehejfX9S4UYcTbBraKAvDj1VLOm3jtVxaQ5g%2BmolkPbdzALeY14fZr5UKaT2OV%2B6GFto5x2vJfXC2kj0QTlRKWnQNCG3iDZBG074nj9rzA4Z0uGz8K77oIKNzC8laxiOxWkk3exOvgsap1VQjWjd4KPUyrvCY8aBtiJ5QpmF%2FX%2BtzsOwz%2BZVqLsLiGO%2B8jL%2BxhJZ%2Fk8I%2BiTFy%2F7PrK0rkEotM%2FDyY19kh3SPrmk7KvxTJmNOq8Rz3arDhKxJ%2FDdqjmelvgw2fuHygY6pgEzLu1jpIONHaWp7TdKfDWMj59FdBxUVbQpahWIqmnQJz14eDIlefCfb6WFmF%2FL6vO15C%2F6j3XET5GMnKM5tw161OBzyf%2B8D04KcjErro0NuhnkaPWXABdae8mrIV1HpU%2By7TYH95CyuyeesJzKidub6Iir0BMWoqDmWJ2nM5FoeBXiTlP6f6H8YzqdkAtL1wL3ouGTFUMZm%2FGnpTVOoJeVdcMh5yXL&X-Amz-Signature=5240491fd40c783392840ae3bc7830ae20e2dc22eeb0c8ebf8f7c32cd86bd494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNIWEWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAquTlJSgUtz5Sj5KTBdD6WUr5v%2B8ldCLbB9RpBmzTRnAiAwOWDa1xOCXs2aypy21Y2YEaQdysJeTg1B0SIJkNFk0ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxNzC54Qmd1CnLjtYKtwDwvVKRQAUaTFKEuZ%2FegOel8zP8iFoWe21vAkyVFfgXql3kPztghOWKnFiuQTHXcJglNd8P5vZs8cJ7BVAo9xy7ha97w3wke0NzWiMaQQlHzLgMLiO1x3x6B0w9qkCMIbt4drq9OdjjhbH5qaU1ctsLxo9yqnHkZ%2FluWjBPlX4z1my%2F5kAYUCkqXffKW%2F3%2FrFyT7UVpn4lqaWIEKFYzYf%2FgYfF7OzngqgjmTbBZI4HWbubPuZAM3h2cgd58Lki%2BijMdzoM1stt1Q%2BaxVDvPr%2Fhmmbq9Ljcjj8LZ1x33i9MD5I03FYeLxwYUgrA92FXKJuc6ot7LM8xZFH0efEw6i%2FOahryuPng5gwlUaiRRGpvt7IwgGUWhK5RyehejfX9S4UYcTbBraKAvDj1VLOm3jtVxaQ5g%2BmolkPbdzALeY14fZr5UKaT2OV%2B6GFto5x2vJfXC2kj0QTlRKWnQNCG3iDZBG074nj9rzA4Z0uGz8K77oIKNzC8laxiOxWkk3exOvgsap1VQjWjd4KPUyrvCY8aBtiJ5QpmF%2FX%2BtzsOwz%2BZVqLsLiGO%2B8jL%2BxhJZ%2Fk8I%2BiTFy%2F7PrK0rkEotM%2FDyY19kh3SPrmk7KvxTJmNOq8Rz3arDhKxJ%2FDdqjmelvgw2fuHygY6pgEzLu1jpIONHaWp7TdKfDWMj59FdBxUVbQpahWIqmnQJz14eDIlefCfb6WFmF%2FL6vO15C%2F6j3XET5GMnKM5tw161OBzyf%2B8D04KcjErro0NuhnkaPWXABdae8mrIV1HpU%2By7TYH95CyuyeesJzKidub6Iir0BMWoqDmWJ2nM5FoeBXiTlP6f6H8YzqdkAtL1wL3ouGTFUMZm%2FGnpTVOoJeVdcMh5yXL&X-Amz-Signature=a571f19e0ea70d0a31872793a5942ba4a995762e03be155c47592ad6443c9e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

