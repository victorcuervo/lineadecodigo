---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6U4J2A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIESso5UqgWCwrcBcSHBKamHDi7jpBlHQu002UEuAv9FXAiEAjOPTaeNIUR276%2FSYNGaEiXa%2BRTQwd3VQGeVd1%2FPyitEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJSFzTQFRmzr6Ekb6ircA1jqxnVsDEJS%2BILgrZMazKseWnjYyrP8B6WbQWdknyjiaPJXOru1AP9aybNVIYct2ZVWlIj%2FNiqXJo7qKhdXVrne%2B2I1DwyKsIjut8L%2F1q3gemkDWFolFD%2FXgRzx1vLFB5OYALT0iyiJiRsnUbu8sIkx05q1Sxgk3anowWwUJSnIRUJ%2B%2BDWdBHXFAr%2FCkE2M%2FVObQWRD9Ep3V2S8q3G6cLgrj%2FKKrr6c5JkoqVXtgLxWZUhmOBY%2FZN7Z1bOUoTE3Rxoq2dBSX770Ae4vDsU%2BBdP%2FnSpn9lxoARdZqT4darA3DnDsy1XPh%2FUHz8ZQj9NLR6XxugKsApqYQSQ4AXaOuevrLccO%2FJQVbsiJHfZQxw2i0nzIBTVBLx%2BHDuszGgqUa%2BAWTb6ukNGpBtkxk2tl%2BOb7dYXd9EUN7hpIJ4RwdYEkVn4M87kUH%2FU8uEGk4VpaLmMt7vNRlbTDvmHlcLSn2J76ij3FKq%2FcLgrhi08HnhZHi9JuFOCQ%2FGcf9YKP3lEIssqnWo4dGcJq8SfJfg6lg6fnr0A6I59%2B38zQ49N6MhGHQquELiH5fcRmR1I48nw%2FaiVrmeHJpV%2BZoGTpQD7gfm3QM6w2aqh2G0Z5S0vulcuz0D3%2BUfGDTd8wDt6TMNLoxMkGOqUBBO%2FIALB%2F0q4PZztv4HKhWfTjryhVaoSPLCTn0INMxfokcmywpiiYnl%2Bj0Vslg%2B5MxWF3o6eLu%2BXfeI2ssbJERMDxPjg8WiAMlquu%2FiyegkzK0qc4b0Vpum8q809wvHfDXdi7BxuSg5zNc2m1RMHXVfiJlxoC8oPRG6HFN7%2FtDojaPj3BSBRyY6onZP8AUpHCZaxF930DX1H2xd8LL%2FnC1JN1ljtz&X-Amz-Signature=b92fced6d497c93ac7a17bd9e92ada67fca08302a4489cdc5d44a605d819eb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6U4J2A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIESso5UqgWCwrcBcSHBKamHDi7jpBlHQu002UEuAv9FXAiEAjOPTaeNIUR276%2FSYNGaEiXa%2BRTQwd3VQGeVd1%2FPyitEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJSFzTQFRmzr6Ekb6ircA1jqxnVsDEJS%2BILgrZMazKseWnjYyrP8B6WbQWdknyjiaPJXOru1AP9aybNVIYct2ZVWlIj%2FNiqXJo7qKhdXVrne%2B2I1DwyKsIjut8L%2F1q3gemkDWFolFD%2FXgRzx1vLFB5OYALT0iyiJiRsnUbu8sIkx05q1Sxgk3anowWwUJSnIRUJ%2B%2BDWdBHXFAr%2FCkE2M%2FVObQWRD9Ep3V2S8q3G6cLgrj%2FKKrr6c5JkoqVXtgLxWZUhmOBY%2FZN7Z1bOUoTE3Rxoq2dBSX770Ae4vDsU%2BBdP%2FnSpn9lxoARdZqT4darA3DnDsy1XPh%2FUHz8ZQj9NLR6XxugKsApqYQSQ4AXaOuevrLccO%2FJQVbsiJHfZQxw2i0nzIBTVBLx%2BHDuszGgqUa%2BAWTb6ukNGpBtkxk2tl%2BOb7dYXd9EUN7hpIJ4RwdYEkVn4M87kUH%2FU8uEGk4VpaLmMt7vNRlbTDvmHlcLSn2J76ij3FKq%2FcLgrhi08HnhZHi9JuFOCQ%2FGcf9YKP3lEIssqnWo4dGcJq8SfJfg6lg6fnr0A6I59%2B38zQ49N6MhGHQquELiH5fcRmR1I48nw%2FaiVrmeHJpV%2BZoGTpQD7gfm3QM6w2aqh2G0Z5S0vulcuz0D3%2BUfGDTd8wDt6TMNLoxMkGOqUBBO%2FIALB%2F0q4PZztv4HKhWfTjryhVaoSPLCTn0INMxfokcmywpiiYnl%2Bj0Vslg%2B5MxWF3o6eLu%2BXfeI2ssbJERMDxPjg8WiAMlquu%2FiyegkzK0qc4b0Vpum8q809wvHfDXdi7BxuSg5zNc2m1RMHXVfiJlxoC8oPRG6HFN7%2FtDojaPj3BSBRyY6onZP8AUpHCZaxF930DX1H2xd8LL%2FnC1JN1ljtz&X-Amz-Signature=79a24194bbe601dacdcb8f1a020c2c12970361a1da4ca67fae5d756d92adbb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

