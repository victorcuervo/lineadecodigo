---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGGQ6VX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEc28KgZY%2FGaNJ8B94NKVnld36Vhs2FgbJYQd9ePf1KAIgOk5rHnmRIQY1nmWUHWGwke6iBl0bHxby6VhEXsSgOYUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHuZE%2BW3jwa8376GCCrcAwLkM57KSsLlcv6YX5L5%2B%2Fj94bXGxw08%2Bue71F0L0tKvPWdzGxVmQRzPr3wtC7MSpqrMVpOBJgG24pzjmCjXHoDYeaH0SqZ3JjzKAIB%2BwRmUxyHo2gIWvA%2BF7qWQGQkr72raTezw9M8I9E6PA8UPivg40jLcS%2FJf52lqUgtvCcqFT19dme%2Fh0seRxwEpbGmYkuvew1%2Fi7qmLLeSsdeS9NP4%2FWQK5HRklrhPvZtKpaXVrAollkhvnUMcUplvQoqpr1d8coPaoLA2x47td%2F%2FRKzR%2BEqmorZoTnIt%2FadFhpgic8SiR%2B5s%2BAcx0R%2BsFh6vL5q9MYdcJntCRdoUwvsk3o%2Fp%2BpM2m%2BWJp%2FEIH8IV%2BPCFkwF7usLeO9PhWcdIDtxn1AtwqMbnZDP%2F6xVEsKNIMqolQukfXMWMVZ6S9EkuxVD91sbqhkQ5JRSAckmUc3%2BCa%2Fk%2FZxdaXvlz2NWxyDabX%2BhotgRMKMbtB0jtFVB65ywHe9GghZJxGT7g%2F1emoH8Ge%2BDlBitKnehrlkZf3CUJbKFomlyfcbh%2BCgE2lLPHEDcokbijb7JBiuOcZ9bbis6x4IIvtg1yclXCiP3507oa%2BApg9YbY0zBI8N0uDA5fCIzFc%2FALOIGRNxZxs6khPNMNWMyMkGOqUB31N9XPhfkZn9DSEU59vjjANaZUA8t54yvR3ekit9pMoqCxOXENJw2bDqkinicWW%2BLjSPkKhETlFNDWKKkU7oWmGRQSTuwlr5CkplloOvevV23gdvZMt%2BX%2FB3PdpwlZHCG9z73nJAG2xQr69PVcHA52FZiSol5bK4izHaqWeVuBxDvfL2gGccdvYaN46LRpHBXHK%2BBbqcotLfP7UkFoEAcWxI7F0O&X-Amz-Signature=1c114e1e24f4690b312b5955b165bb4dfabbca29c477dcd183423f115283c3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGGQ6VX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEc28KgZY%2FGaNJ8B94NKVnld36Vhs2FgbJYQd9ePf1KAIgOk5rHnmRIQY1nmWUHWGwke6iBl0bHxby6VhEXsSgOYUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHuZE%2BW3jwa8376GCCrcAwLkM57KSsLlcv6YX5L5%2B%2Fj94bXGxw08%2Bue71F0L0tKvPWdzGxVmQRzPr3wtC7MSpqrMVpOBJgG24pzjmCjXHoDYeaH0SqZ3JjzKAIB%2BwRmUxyHo2gIWvA%2BF7qWQGQkr72raTezw9M8I9E6PA8UPivg40jLcS%2FJf52lqUgtvCcqFT19dme%2Fh0seRxwEpbGmYkuvew1%2Fi7qmLLeSsdeS9NP4%2FWQK5HRklrhPvZtKpaXVrAollkhvnUMcUplvQoqpr1d8coPaoLA2x47td%2F%2FRKzR%2BEqmorZoTnIt%2FadFhpgic8SiR%2B5s%2BAcx0R%2BsFh6vL5q9MYdcJntCRdoUwvsk3o%2Fp%2BpM2m%2BWJp%2FEIH8IV%2BPCFkwF7usLeO9PhWcdIDtxn1AtwqMbnZDP%2F6xVEsKNIMqolQukfXMWMVZ6S9EkuxVD91sbqhkQ5JRSAckmUc3%2BCa%2Fk%2FZxdaXvlz2NWxyDabX%2BhotgRMKMbtB0jtFVB65ywHe9GghZJxGT7g%2F1emoH8Ge%2BDlBitKnehrlkZf3CUJbKFomlyfcbh%2BCgE2lLPHEDcokbijb7JBiuOcZ9bbis6x4IIvtg1yclXCiP3507oa%2BApg9YbY0zBI8N0uDA5fCIzFc%2FALOIGRNxZxs6khPNMNWMyMkGOqUB31N9XPhfkZn9DSEU59vjjANaZUA8t54yvR3ekit9pMoqCxOXENJw2bDqkinicWW%2BLjSPkKhETlFNDWKKkU7oWmGRQSTuwlr5CkplloOvevV23gdvZMt%2BX%2FB3PdpwlZHCG9z73nJAG2xQr69PVcHA52FZiSol5bK4izHaqWeVuBxDvfL2gGccdvYaN46LRpHBXHK%2BBbqcotLfP7UkFoEAcWxI7F0O&X-Amz-Signature=281c4dcd0c5dd510de826d375e374652449a73a2addd144d4768d5f5240a8741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

