---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3K72DH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm0nuaDmnsxv33xGNH9Ow0vJfhM2IcHNOj%2BluisyN9nAiEAklnqZRA99eE2c7Flm%2BCeIIy8%2BGVZbb7I42104OHH3ekq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHuBzGjRPsSExhWlECrcA7C%2BipIb9uW%2FZeOAqlU8tiLUxviWRdV8OBgbSgXsVFNADHFk3xAq8wase8FRZsjlXDKlMMBZBgUEcqqyC7eV81mduzOCuKTORJr%2FcoIrV9ac%2FOuh5u7Nk3TFHEYCfYWlmJ679H38fK1kXICIKFCjGDZFZtKSqXELHZwmKy45d%2Fy%2BcwXS2Sur0ZPgA9eSF16GDXk31kOlz%2BXa%2BAFfEyxVJO6AMDpp%2BAw8awaAmXUY47Ox7UrQwM9Onh2dst1g90ohRdPVrGIRvTD7whuHPKgvYP3LiuvzTkmxNX4qxeZv31QRedmdKvL6tX2CDqJfJAIQZ1xQ%2FHB4wjWhulK48qtDW0x%2Fpo%2F6UvVrIIsfDoT%2Bwh59QK2vUt6cIqWEmMIz1lY%2FspJ%2FrRBbak9d5V4gf%2FDsVBgDiEIFxsitbDal0K5paY9d7q7bXmc4YtA0Hw5T82%2BTkx4ysQvJ9Sfqg%2FtWT28uyr11VelHttl%2BJbHsw8VH6ZhrZQZ9GgQN7BKmBhKxqSo51RCk9goNqDm9HIR3%2B%2FqdpBDBLTCHXm7%2BHXCV%2F4pnr01N%2FqPOLsIZVu%2BljgcdGGHt29R64sODip0k7uDQVO0GktpbIqGaE62aJix1bvpn2IDkcEfKEZadnbfrZgE4MLP2y8kGOqUBitNg7uTrLyB1gXJ%2Bi%2Bcwn45Nbp15%2B40PdCoUQB3gY7BuwZTKO8iohVgxXKah1fIF0f2RMWgXRTEjOc%2Fu6zrxkNcEPLPkt%2Fr1os9QEkSNZjlURtsDmJ2b42aWucYTDW9sZUwxsF3oESJa%2FucCZQsrK47JGoNJWFfPjZ9mhMlP9GtGN%2FZBRxLgU6GjRjSLpe4ZRIeWfg%2BkU48GxuwYPe7LsMSB6t7s&X-Amz-Signature=5056f941ec2138b59ca436f449e6fb2890868f5ed61dd25dbebdcedb8a52b522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3K72DH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm0nuaDmnsxv33xGNH9Ow0vJfhM2IcHNOj%2BluisyN9nAiEAklnqZRA99eE2c7Flm%2BCeIIy8%2BGVZbb7I42104OHH3ekq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHuBzGjRPsSExhWlECrcA7C%2BipIb9uW%2FZeOAqlU8tiLUxviWRdV8OBgbSgXsVFNADHFk3xAq8wase8FRZsjlXDKlMMBZBgUEcqqyC7eV81mduzOCuKTORJr%2FcoIrV9ac%2FOuh5u7Nk3TFHEYCfYWlmJ679H38fK1kXICIKFCjGDZFZtKSqXELHZwmKy45d%2Fy%2BcwXS2Sur0ZPgA9eSF16GDXk31kOlz%2BXa%2BAFfEyxVJO6AMDpp%2BAw8awaAmXUY47Ox7UrQwM9Onh2dst1g90ohRdPVrGIRvTD7whuHPKgvYP3LiuvzTkmxNX4qxeZv31QRedmdKvL6tX2CDqJfJAIQZ1xQ%2FHB4wjWhulK48qtDW0x%2Fpo%2F6UvVrIIsfDoT%2Bwh59QK2vUt6cIqWEmMIz1lY%2FspJ%2FrRBbak9d5V4gf%2FDsVBgDiEIFxsitbDal0K5paY9d7q7bXmc4YtA0Hw5T82%2BTkx4ysQvJ9Sfqg%2FtWT28uyr11VelHttl%2BJbHsw8VH6ZhrZQZ9GgQN7BKmBhKxqSo51RCk9goNqDm9HIR3%2B%2FqdpBDBLTCHXm7%2BHXCV%2F4pnr01N%2FqPOLsIZVu%2BljgcdGGHt29R64sODip0k7uDQVO0GktpbIqGaE62aJix1bvpn2IDkcEfKEZadnbfrZgE4MLP2y8kGOqUBitNg7uTrLyB1gXJ%2Bi%2Bcwn45Nbp15%2B40PdCoUQB3gY7BuwZTKO8iohVgxXKah1fIF0f2RMWgXRTEjOc%2Fu6zrxkNcEPLPkt%2Fr1os9QEkSNZjlURtsDmJ2b42aWucYTDW9sZUwxsF3oESJa%2FucCZQsrK47JGoNJWFfPjZ9mhMlP9GtGN%2FZBRxLgU6GjRjSLpe4ZRIeWfg%2BkU48GxuwYPe7LsMSB6t7s&X-Amz-Signature=6013d6d1ba5d20981009d661c574ff03eedf9fb34cf25353db9e14c7e3bfcb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

