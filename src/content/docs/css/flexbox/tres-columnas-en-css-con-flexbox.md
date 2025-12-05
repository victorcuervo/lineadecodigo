---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEYKCWOA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7uo41Olqprv4tQdHKXAFiHGQJrrQDDJgrxnaxHNu9wIgaag1w28Z2R1LgyUubauKqq0cM73%2FznN9pwGwHuBb9JUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGNABgbPxl06fKwSnyrcAyfmlPxy2H17puKN5Rwlfz%2BNvVOtum4scbQPOSQLR6DAvATVf2JlNHVs7A%2Fs3D%2Br0BRvHe4Z3M7zrd4Jdg3TzEhOemcP2E3E%2FgYzztS7SU1rN09t3g9GE0mrzhMPib2852vDPVfWRfGELU4StmSQjYgjJGSlR9DBGyN3nW28lJMqvnmz%2FckGjpHl5t7duQFTUXiQxFpDQ2gL0%2BLPKi%2BUB5OBn6Ef3tlkWCF%2Bq%2ByKGVsuyNgjvJAnXq%2FrsETbatC17%2BeZl7%2BmJvS7r%2Fvt4F6uH3mV1e0cNRQ2F%2Fj64lZ%2BnH%2FvJgOaP0k9svTx1YgN7COAzrPry1ZvWxZWt7H7W%2Bj51D9AgTmzH1PlNIRLiOTj9IomIKFCKINxgB63HCjljwfb2%2FlhSrah1FZd0iiBFHmt5in%2F%2Bn4PWMA1uA5FB4aq12gX%2BcCyCcSAKC77JRuXzCIUoDgKDg%2B6sII6ATjXa3cgDSiVW9wonSQUX2H8Cbuf8AhXgra1KdGM%2BpIAhjammsXx1%2FLJlO8tkSaYMHI%2BCECCZRXxtGM94wkZwfd5sjJFG2S5l%2FmEF8Xuz7ecexlC3NLz5AXe%2BY4NQxt5xUxlhANQXKGGLaPShbeN3ZXWTjxxcbVdzhW80bfPyAQfMagnMKfOyskGOqUBzkBFSEIE8LJa4D3zLbDIbV%2BYujg46Bmgeuzgidz6hYdURGkGL0dZtZ%2F1oqEa813ctz0lpUhVpSVcgCeQQjhOhLOAUYy0e%2FbuWNgkydJr7pVC5v5QGhn3m60z7uDTGgjrKA%2FQg4fYnDbKqsiaoY8Rop7M1CYv%2B7w0wR1Nzsr5DUQk9C%2FCCH0t2atOP0LWX8oVwH1lYFI5OYhbXZ%2FSGwyWRFBAb5OB&X-Amz-Signature=4757a7cccc40499141ea282430dfe9481d8d20e38341cea4554a09546f0af962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEYKCWOA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7uo41Olqprv4tQdHKXAFiHGQJrrQDDJgrxnaxHNu9wIgaag1w28Z2R1LgyUubauKqq0cM73%2FznN9pwGwHuBb9JUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGNABgbPxl06fKwSnyrcAyfmlPxy2H17puKN5Rwlfz%2BNvVOtum4scbQPOSQLR6DAvATVf2JlNHVs7A%2Fs3D%2Br0BRvHe4Z3M7zrd4Jdg3TzEhOemcP2E3E%2FgYzztS7SU1rN09t3g9GE0mrzhMPib2852vDPVfWRfGELU4StmSQjYgjJGSlR9DBGyN3nW28lJMqvnmz%2FckGjpHl5t7duQFTUXiQxFpDQ2gL0%2BLPKi%2BUB5OBn6Ef3tlkWCF%2Bq%2ByKGVsuyNgjvJAnXq%2FrsETbatC17%2BeZl7%2BmJvS7r%2Fvt4F6uH3mV1e0cNRQ2F%2Fj64lZ%2BnH%2FvJgOaP0k9svTx1YgN7COAzrPry1ZvWxZWt7H7W%2Bj51D9AgTmzH1PlNIRLiOTj9IomIKFCKINxgB63HCjljwfb2%2FlhSrah1FZd0iiBFHmt5in%2F%2Bn4PWMA1uA5FB4aq12gX%2BcCyCcSAKC77JRuXzCIUoDgKDg%2B6sII6ATjXa3cgDSiVW9wonSQUX2H8Cbuf8AhXgra1KdGM%2BpIAhjammsXx1%2FLJlO8tkSaYMHI%2BCECCZRXxtGM94wkZwfd5sjJFG2S5l%2FmEF8Xuz7ecexlC3NLz5AXe%2BY4NQxt5xUxlhANQXKGGLaPShbeN3ZXWTjxxcbVdzhW80bfPyAQfMagnMKfOyskGOqUBzkBFSEIE8LJa4D3zLbDIbV%2BYujg46Bmgeuzgidz6hYdURGkGL0dZtZ%2F1oqEa813ctz0lpUhVpSVcgCeQQjhOhLOAUYy0e%2FbuWNgkydJr7pVC5v5QGhn3m60z7uDTGgjrKA%2FQg4fYnDbKqsiaoY8Rop7M1CYv%2B7w0wR1Nzsr5DUQk9C%2FCCH0t2atOP0LWX8oVwH1lYFI5OYhbXZ%2FSGwyWRFBAb5OB&X-Amz-Signature=a5517367be9fc6010625dfd1012807c377170ef6f317d8e8aa2e6082e1965323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

