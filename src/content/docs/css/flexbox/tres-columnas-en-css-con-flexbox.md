---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSTPGNUJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtjjvc0x%2FY4PzzGE8UbAOcZjyQfpYZ0K3C57KOx6JHYAiEA21O382sdTFOLraxa1DHtn7OJO1qgir1alUX5mT2xZUEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB9fWnnofmY9yu85fCrcAzxYBeo8IBgoJtSu%2FuNHIyoanu%2BTk6o9k%2FYVYiU6yV9jdUGQ9Tr8KNaT3oMd16x8V5Qh%2FR7Ia%2FrGmVue4OtdiK2g7UHZCEnFTYrOu5pfJYRLl%2BqvESB8OeBQxHNdMK79Bpe%2FivhhgAypziSedSeJbt6s%2FggOYEcmIh7JpSDVZTpSSJYQBiVN3JbUlCZI0qzhx1K%2FZ%2FbossNbAGs7wOEJ2g5yMrbryRAH5%2FjodBVti3bGw%2BdrOeHVAc8s5b6SMC52ELQ%2BS%2BSDZXLoBOOv9dK8gbZhJYpzFq6iHcxnKjPhSX0yC3NTEAxlZ6zqlLgthlV9VUI3R9iQlEuB6Xp5VxzbYA0PRXLf8L4OH74xquq3CF95VCsUpFgq2IOaPDDoOmzMlnHTClCs7rCS0kloKcb2VbLQgh3TWHQcUWlsMFo8UgEyVG35%2FzXVTgzlJRpkGVMdzTrNgNqRKJprxUFFvBL7%2F0JZjEWPSmm84WSNdtg0ZjP9CS9uOlTjtOuybKDCOUCeWJ%2B5Mb9BABlTuq9sDBXZO0PDNDW%2Fxb%2FWlUFktpuDDEWpjBElC5hD%2Bqg4XzUCexTwR6gxfQHJPN%2BlbERxNEA75sdqv8yQ7PAwFODk42JBt0cFaL%2Fa1ZjSLztvj20lMJbT0skGOqUBvMw2gdTCLeqj0d6rrBWnn7qKWHiKGUN7q29AtyttTDLsyJ0B2aCLymk7RJwdbUbYFAYFFxqIfyNABp6rYR7IuI%2FYHNZ2C3KOgwcZ5PDhOuw7VMYAc0IGVTvFET5NUKejt5aKSvFZ1eOahsSnEgj8zHpuwF%2BjU56rB4hbsOnuolh614cni3RHDzirUDuNxIhp5%2Bl4Cm2lX0W%2BLX8VZy%2FkM3GrPOtg&X-Amz-Signature=763aa825e937b8856428481838316e28946ee6d73f4539def92dfb0ba8b627f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSTPGNUJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtjjvc0x%2FY4PzzGE8UbAOcZjyQfpYZ0K3C57KOx6JHYAiEA21O382sdTFOLraxa1DHtn7OJO1qgir1alUX5mT2xZUEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB9fWnnofmY9yu85fCrcAzxYBeo8IBgoJtSu%2FuNHIyoanu%2BTk6o9k%2FYVYiU6yV9jdUGQ9Tr8KNaT3oMd16x8V5Qh%2FR7Ia%2FrGmVue4OtdiK2g7UHZCEnFTYrOu5pfJYRLl%2BqvESB8OeBQxHNdMK79Bpe%2FivhhgAypziSedSeJbt6s%2FggOYEcmIh7JpSDVZTpSSJYQBiVN3JbUlCZI0qzhx1K%2FZ%2FbossNbAGs7wOEJ2g5yMrbryRAH5%2FjodBVti3bGw%2BdrOeHVAc8s5b6SMC52ELQ%2BS%2BSDZXLoBOOv9dK8gbZhJYpzFq6iHcxnKjPhSX0yC3NTEAxlZ6zqlLgthlV9VUI3R9iQlEuB6Xp5VxzbYA0PRXLf8L4OH74xquq3CF95VCsUpFgq2IOaPDDoOmzMlnHTClCs7rCS0kloKcb2VbLQgh3TWHQcUWlsMFo8UgEyVG35%2FzXVTgzlJRpkGVMdzTrNgNqRKJprxUFFvBL7%2F0JZjEWPSmm84WSNdtg0ZjP9CS9uOlTjtOuybKDCOUCeWJ%2B5Mb9BABlTuq9sDBXZO0PDNDW%2Fxb%2FWlUFktpuDDEWpjBElC5hD%2Bqg4XzUCexTwR6gxfQHJPN%2BlbERxNEA75sdqv8yQ7PAwFODk42JBt0cFaL%2Fa1ZjSLztvj20lMJbT0skGOqUBvMw2gdTCLeqj0d6rrBWnn7qKWHiKGUN7q29AtyttTDLsyJ0B2aCLymk7RJwdbUbYFAYFFxqIfyNABp6rYR7IuI%2FYHNZ2C3KOgwcZ5PDhOuw7VMYAc0IGVTvFET5NUKejt5aKSvFZ1eOahsSnEgj8zHpuwF%2BjU56rB4hbsOnuolh614cni3RHDzirUDuNxIhp5%2Bl4Cm2lX0W%2BLX8VZy%2FkM3GrPOtg&X-Amz-Signature=c78b459205cb75c54b1678941d68003185768f44a7b9acb7966f1221d477f43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

