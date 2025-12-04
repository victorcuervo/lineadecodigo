---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6XXZVV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjZxKzxiNSuwRhMn0Q6Dbqkn3PCH5RI4pD77qvC84jFAiEAtgzeq0aGsMPbP%2BKjX3b9HcsvS1RbD77%2FLSbLAr2fbKIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD%2BjUXKnDyBkFWJXGCrcA8QENqVZ526wO09KOqlTVf3ZPYEfxHBoMZvyR9c%2B02OwjxSDPTG5xosHsvya%2Fv5lEm6idKl8zVJhV4800OkK36%2BVw6VqTeBPy8C6ezeQn8QV%2BhRMqUxxfCS%2Fl2Fn8dgCFfOi6ipwWCOWhvvG%2BZtkkQTMj3n4aM2VhUIIBa0SGaa69DO23FKcmpi0dj9TvJ1D1H1yxQpnPAPUBXSNyNLnasjihQjrUoFHagVGU9V8g87Od9b0JsTOR8tDvZJdCdmRS4gUDRyHnmOrmxgMVcEHuFeRAjJ3Efnue%2BvM8eMDi8bzJ9%2FjHp%2BFQ%2FM2DJFT7uLfyluvXyx7VRn3ikXNFrn0D4hoZapsdqVYRfShUOW536ufo7XcUCqOIOd8Or0bU9Zw8ep1%2BB%2B%2FWew4EaVYU38Gr5KJOWMmeV3%2F10rAfQjtjwC1rt%2Fzeg%2FC1KOQFDf5AIY%2F7Mmg9R6SPl4C%2B7akaBM5uJlER5fcGp7ETHpDOTvB2Ya6%2Fn6Dkx9MxTA49UCVJ%2BfccdNjQHSRnbQO%2BX%2Bueok5%2F2EUF47jfa%2BqKPFA1lH8w0LEdcGf8awmlaj6V37DgyuRWXgMqRbTxoIWsyHKS05el%2FBkVn%2FmSxdLGm3tBz7Bpe%2BQ%2B1dlh2HmYawzy86rMJz6xskGOqUBrCQUnJqPMNbCcsz%2BVpjk%2B%2BXaVgNvt9%2Fi96dunAX2aGLWVZuBtZGmD93LZLUmqLSx%2FlcutvLOCSvELorOCKQqbvDt1XeOEz3PmlxLr2MhQSF4hNDbrTvDZrNMrQryfjX50ecDO42Qfb631MbCU91KLFA4gksUEbqNzx8aJUVGgyHrj%2FfAX7LaMaMMYAx%2FwuPifOdAzTXbeosvcdAw5ACDpWX%2BGbtp&X-Amz-Signature=4c3dda27a0810e5b6041893013797f615395a01768192725cec7fffe651ba21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6XXZVV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjZxKzxiNSuwRhMn0Q6Dbqkn3PCH5RI4pD77qvC84jFAiEAtgzeq0aGsMPbP%2BKjX3b9HcsvS1RbD77%2FLSbLAr2fbKIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDD%2BjUXKnDyBkFWJXGCrcA8QENqVZ526wO09KOqlTVf3ZPYEfxHBoMZvyR9c%2B02OwjxSDPTG5xosHsvya%2Fv5lEm6idKl8zVJhV4800OkK36%2BVw6VqTeBPy8C6ezeQn8QV%2BhRMqUxxfCS%2Fl2Fn8dgCFfOi6ipwWCOWhvvG%2BZtkkQTMj3n4aM2VhUIIBa0SGaa69DO23FKcmpi0dj9TvJ1D1H1yxQpnPAPUBXSNyNLnasjihQjrUoFHagVGU9V8g87Od9b0JsTOR8tDvZJdCdmRS4gUDRyHnmOrmxgMVcEHuFeRAjJ3Efnue%2BvM8eMDi8bzJ9%2FjHp%2BFQ%2FM2DJFT7uLfyluvXyx7VRn3ikXNFrn0D4hoZapsdqVYRfShUOW536ufo7XcUCqOIOd8Or0bU9Zw8ep1%2BB%2B%2FWew4EaVYU38Gr5KJOWMmeV3%2F10rAfQjtjwC1rt%2Fzeg%2FC1KOQFDf5AIY%2F7Mmg9R6SPl4C%2B7akaBM5uJlER5fcGp7ETHpDOTvB2Ya6%2Fn6Dkx9MxTA49UCVJ%2BfccdNjQHSRnbQO%2BX%2Bueok5%2F2EUF47jfa%2BqKPFA1lH8w0LEdcGf8awmlaj6V37DgyuRWXgMqRbTxoIWsyHKS05el%2FBkVn%2FmSxdLGm3tBz7Bpe%2BQ%2B1dlh2HmYawzy86rMJz6xskGOqUBrCQUnJqPMNbCcsz%2BVpjk%2B%2BXaVgNvt9%2Fi96dunAX2aGLWVZuBtZGmD93LZLUmqLSx%2FlcutvLOCSvELorOCKQqbvDt1XeOEz3PmlxLr2MhQSF4hNDbrTvDZrNMrQryfjX50ecDO42Qfb631MbCU91KLFA4gksUEbqNzx8aJUVGgyHrj%2FfAX7LaMaMMYAx%2FwuPifOdAzTXbeosvcdAw5ACDpWX%2BGbtp&X-Amz-Signature=7be031151ac6556b007ff514846d625272dcc14292323cfed873e52ba605ba74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

