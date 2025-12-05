---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWPMHCP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB6nXy3H498gSjzsq0uHpNbWKWB63zD5b6nXTsHHQWuAIhAMN9FTvt38gvXg5y4UfVTHCWbgo4o1%2FrgHVnTkJR1ndgKv8DCFsQABoMNjM3NDIzMTgzODA1IgyWE8ePNuQrCCzgoQEq3APKKlsc3HdddJcBxlmfEvL8sUnWi7HyhVZ85C5vvL3voAkos2MguG9oCxed8qQPo0KAC6qqlMNyi%2FiTP6b8Z9egfUDnNCBcF0D9lput4xdps5%2BKYHe58kYiSyg4hMojapyYJ2OyJxADuMmlZWl4Ld6%2FrKiE4gzR49xCtj9G0x3l54r79%2FVCOGXmcmHKY30uRdnpV4Kk1MrCSXID0NlN1F7JeadNb0gpHoiOuRZ4PYnWISGrlO%2B9peoWdiPU3ZXdOu%2BTyjC4aVjKTMM06QRWBq631ed1yhwm%2B%2BhhB48tibSv9PMB175vYT%2Bl2HkeeLJlVrG56sA018qOgubboqG6VWBskNzwCVojFwy6F4Zx7T3TsD5ONQd3pxDytAD9fFgoaqSvxfusGYvz%2FKvoM8DLxKDwJs65Lz6GO8RJnPzwRyCiC9TIACU8O%2FYm6zOCIzqeCbfoTcUmITWAczkfnCHeCzqgz1PbP9PpQiwX4TduU355A%2BBHlMnh2oy9Cr8L1oTPX0jLcXyhreaFtN1YQPoeDTwnlr%2FB9aMcGWBHLuhtOQKRZ2lubMioivYyNbXxCHRDiakjWwWR9ulpKSoQhRkbNzUdAJtPwEXTiXyyfk9is5QXU0u%2B0liKNXXl1yvJXTDwzcrJBjqkAduDhUOS06bqBmdavbR58a7b%2BIHLFLqRawAzYnHGKhxKb%2BjlNIJA8hnBiuQSDUvCrgRruiZORfd%2FqXiuZ9wmg8aZelAUtYUgvOLUZcZHBrrc%2Bw5Cqu%2BDaqVkWMOO6T8N9%2BUi7NhLfnb3aLGgIQgisJmAmpNFIw%2BF%2FWo1qmxxAsDdfMKyqjgPc1rRksfnwa8GU2KlYpq%2FukYexjMN%2Bpi3pn%2BQzn8X&X-Amz-Signature=f563476b0b9b691eda9d1917e787611c1002c12060571323f248879f2654090d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWPMHCP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB6nXy3H498gSjzsq0uHpNbWKWB63zD5b6nXTsHHQWuAIhAMN9FTvt38gvXg5y4UfVTHCWbgo4o1%2FrgHVnTkJR1ndgKv8DCFsQABoMNjM3NDIzMTgzODA1IgyWE8ePNuQrCCzgoQEq3APKKlsc3HdddJcBxlmfEvL8sUnWi7HyhVZ85C5vvL3voAkos2MguG9oCxed8qQPo0KAC6qqlMNyi%2FiTP6b8Z9egfUDnNCBcF0D9lput4xdps5%2BKYHe58kYiSyg4hMojapyYJ2OyJxADuMmlZWl4Ld6%2FrKiE4gzR49xCtj9G0x3l54r79%2FVCOGXmcmHKY30uRdnpV4Kk1MrCSXID0NlN1F7JeadNb0gpHoiOuRZ4PYnWISGrlO%2B9peoWdiPU3ZXdOu%2BTyjC4aVjKTMM06QRWBq631ed1yhwm%2B%2BhhB48tibSv9PMB175vYT%2Bl2HkeeLJlVrG56sA018qOgubboqG6VWBskNzwCVojFwy6F4Zx7T3TsD5ONQd3pxDytAD9fFgoaqSvxfusGYvz%2FKvoM8DLxKDwJs65Lz6GO8RJnPzwRyCiC9TIACU8O%2FYm6zOCIzqeCbfoTcUmITWAczkfnCHeCzqgz1PbP9PpQiwX4TduU355A%2BBHlMnh2oy9Cr8L1oTPX0jLcXyhreaFtN1YQPoeDTwnlr%2FB9aMcGWBHLuhtOQKRZ2lubMioivYyNbXxCHRDiakjWwWR9ulpKSoQhRkbNzUdAJtPwEXTiXyyfk9is5QXU0u%2B0liKNXXl1yvJXTDwzcrJBjqkAduDhUOS06bqBmdavbR58a7b%2BIHLFLqRawAzYnHGKhxKb%2BjlNIJA8hnBiuQSDUvCrgRruiZORfd%2FqXiuZ9wmg8aZelAUtYUgvOLUZcZHBrrc%2Bw5Cqu%2BDaqVkWMOO6T8N9%2BUi7NhLfnb3aLGgIQgisJmAmpNFIw%2BF%2FWo1qmxxAsDdfMKyqjgPc1rRksfnwa8GU2KlYpq%2FukYexjMN%2Bpi3pn%2BQzn8X&X-Amz-Signature=5f7d5021a143dc84dad70a37830143d2d33f8da3ee37d45a0379e2043f6e29e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

