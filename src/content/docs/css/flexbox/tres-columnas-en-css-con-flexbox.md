---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGQVRME%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCMcX%2BYTLfqhEA%2BCTBawtI4kcA6%2FTXhOmNtgKEtog9MEgIhALn%2FBiK5HxWN0Mp4cMH4hA5kxkygQ58YmCNHp2QoZ7JpKv8DCEcQABoMNjM3NDIzMTgzODA1IgyRbrjU2EAv%2BlOrt3cq3AOf1IHkVs9zDLCJOhLQPBPoz5Aq0cf4GEsqyUYsVheDMVS%2FdXtoIQOXv7G79nk0qU%2BSCITc9DI6pPV0BLQOohlfQfkdI7IigytG6FNYs70Ru2BrZXm5MZv2c2Ob3E0JdvD4h4VS9n8aB9PbMwRuUwTwiKE9UDgTKL7GxXhpMflEeOhcwJnQ2VZf2M%2B2myGB8zDkKMsJhkirznMaec1zp5t4GJGZXKWI0YbzLTG1DezHZOJj0cglTQBYM8%2BXlnPEO0wkhLSfyGpXGwvKozK3rYmMF81Q%2FfGj8ivGcqpJPVw23zt%2Bsuq5GXBgwDFqPSggA7ETsrGChZ1Rszaar6qKwRRTNO9MnKsX8X%2FCr5xLpWJ8EA3rT18fL3wU%2FYMnB7ZaxWpDh8w2MljIMTOCTH1Ewtax5Vw7iFAu%2BLJcPyIiyWoaIHUGgcgNN05JyLhFPpZ6D4xASi33iLh9ehHljBDOgHnRe4LgQk6s%2FaDi6ukEOtxLw3%2F9lKQ1IVpYo21xCP6HXmuFgQvchzcWChHajfRUxTE%2BtqZWZDVyQTPw45G%2Fs6yW35kxbFHug%2Bd306B2YoS%2F3djs5GaFZga7SeY3wZEpDrSHJlbM%2BuDCLLxOyQnwDmC8kTfnsD%2FsmgWhjkbsqjCZosbJBjqkAYQvEfyJsh4JogViFN9unkVOZtHn1V61SdTfkJqEqtgfOwV3cPrP%2Bh51b7y7TL85DppBP7Adp95pbJL%2FTUKMUMuF%2FTQvUMyZaHJ8p9BLUy1lJjf58WwYpv0%2BWMhlUuzgK0gdNofbnochD2fp74%2BKNyJFCWdPHFn%2FHHX1fRWzMMn66X%2BAiRLB4tEdRZykQWBUldWA8hDalWME76F1YEl2ymfYu%2F1M&X-Amz-Signature=46ab37ae72c8efd74396f1b11966e11280544fb28655ce6764cd29f1374075d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGQVRME%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCMcX%2BYTLfqhEA%2BCTBawtI4kcA6%2FTXhOmNtgKEtog9MEgIhALn%2FBiK5HxWN0Mp4cMH4hA5kxkygQ58YmCNHp2QoZ7JpKv8DCEcQABoMNjM3NDIzMTgzODA1IgyRbrjU2EAv%2BlOrt3cq3AOf1IHkVs9zDLCJOhLQPBPoz5Aq0cf4GEsqyUYsVheDMVS%2FdXtoIQOXv7G79nk0qU%2BSCITc9DI6pPV0BLQOohlfQfkdI7IigytG6FNYs70Ru2BrZXm5MZv2c2Ob3E0JdvD4h4VS9n8aB9PbMwRuUwTwiKE9UDgTKL7GxXhpMflEeOhcwJnQ2VZf2M%2B2myGB8zDkKMsJhkirznMaec1zp5t4GJGZXKWI0YbzLTG1DezHZOJj0cglTQBYM8%2BXlnPEO0wkhLSfyGpXGwvKozK3rYmMF81Q%2FfGj8ivGcqpJPVw23zt%2Bsuq5GXBgwDFqPSggA7ETsrGChZ1Rszaar6qKwRRTNO9MnKsX8X%2FCr5xLpWJ8EA3rT18fL3wU%2FYMnB7ZaxWpDh8w2MljIMTOCTH1Ewtax5Vw7iFAu%2BLJcPyIiyWoaIHUGgcgNN05JyLhFPpZ6D4xASi33iLh9ehHljBDOgHnRe4LgQk6s%2FaDi6ukEOtxLw3%2F9lKQ1IVpYo21xCP6HXmuFgQvchzcWChHajfRUxTE%2BtqZWZDVyQTPw45G%2Fs6yW35kxbFHug%2Bd306B2YoS%2F3djs5GaFZga7SeY3wZEpDrSHJlbM%2BuDCLLxOyQnwDmC8kTfnsD%2FsmgWhjkbsqjCZosbJBjqkAYQvEfyJsh4JogViFN9unkVOZtHn1V61SdTfkJqEqtgfOwV3cPrP%2Bh51b7y7TL85DppBP7Adp95pbJL%2FTUKMUMuF%2FTQvUMyZaHJ8p9BLUy1lJjf58WwYpv0%2BWMhlUuzgK0gdNofbnochD2fp74%2BKNyJFCWdPHFn%2FHHX1fRWzMMn66X%2BAiRLB4tEdRZykQWBUldWA8hDalWME76F1YEl2ymfYu%2F1M&X-Amz-Signature=9ce1fa27650ebe02a00ff17e027a13cec53f21fc2f61f11c5a0ac1e417fe34d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

