---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAS2WKX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkj3pmVOIeYNNAzHRj1Gsv9buf8MwAvgpqrNaYuRp96AiEAskG%2BGwdQX%2Bbqsh9nxsjOIV0MU9951jk85slC9dHzi8cq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJt7p40W3yEoj%2Bk2FircA76cry18BhjRsxVb%2BSxfi1DSf0xmi1axd55iOCjf47%2Bs1RaGKz8waKgrbGvOR1%2FSQ1z%2FosnxdC6%2FdA8UJdAZZj6%2FPOmSzgyyTlg9qfgx0VxwE0KWa9ibkXpHlxThVl4kKVb0ooH%2FNYOPgdqi5wBo8VH4%2B5A6OZZWWUewP4TUd4DUl%2BxdM7s6qeubfA0InJSgmHsu3F53kQoPVXdeZY2aDYv36StoiyoSZPg2H3K5BltqSkaceSczL92LO%2FEg75gunOAROyQZB%2Bzleef7dN6nndHiZRDRbQERuqFnQhq%2Fx85X46v4ZrMqNZHVEzC0xz6o5C48NmfChCTkZ0w4JAUOiy%2Bc1Y66jfd6A29uB%2BjD2h%2BEoDkhufk%2BMl4GInWzGOI8ONyzprTTqAmZw7DiGKYsVNsGTrYcKa%2F9TELm0kc6sAYlWv3aQ7EmXcjz5zzQgzcFLTxPbZAQLx4ndHkmkyw8O1Bo%2BuCq7JLsP2ShZOyIfh6iTgOlOpLfDzl7DLLcI%2BkkZA8GuYIKd3C2QezcmJjhZTnTgdLjGVgdqatU0Mf9RVBr4suxzwzD%2BG7ciYDL%2FJLdy%2F9QwrSLW496qmbdLWgOXBKvljIZVO6CzEr90vxLt%2BY1W1mMF62FBTmAXxNNMLLGzckGOqUB7LS2RFlJFO6xg%2F%2BC0kiopna9OktKS6wZgVfGdn7kh6tfON4O9RKZppbh5jNTfEqZaQWlgEdhvKdrR%2F9Xy6M%2FkUL5iDoSI5rEyF4mQuin1SXlCurKZN9T%2B%2BwknsfyrOSs15o8YtGrzTuonGvDxD5DLLwEkHRuduBzU980n1zQzav8dunDMzbLWA5OfKZxBU%2BU3FlIGYdlIytYVPjIsBG%2FuGC2L%2FAb&X-Amz-Signature=9ca4f40566f442ae15278e1bd011117d9faa4d724e43e3c5826119cd82a981c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAS2WKX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkj3pmVOIeYNNAzHRj1Gsv9buf8MwAvgpqrNaYuRp96AiEAskG%2BGwdQX%2Bbqsh9nxsjOIV0MU9951jk85slC9dHzi8cq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJt7p40W3yEoj%2Bk2FircA76cry18BhjRsxVb%2BSxfi1DSf0xmi1axd55iOCjf47%2Bs1RaGKz8waKgrbGvOR1%2FSQ1z%2FosnxdC6%2FdA8UJdAZZj6%2FPOmSzgyyTlg9qfgx0VxwE0KWa9ibkXpHlxThVl4kKVb0ooH%2FNYOPgdqi5wBo8VH4%2B5A6OZZWWUewP4TUd4DUl%2BxdM7s6qeubfA0InJSgmHsu3F53kQoPVXdeZY2aDYv36StoiyoSZPg2H3K5BltqSkaceSczL92LO%2FEg75gunOAROyQZB%2Bzleef7dN6nndHiZRDRbQERuqFnQhq%2Fx85X46v4ZrMqNZHVEzC0xz6o5C48NmfChCTkZ0w4JAUOiy%2Bc1Y66jfd6A29uB%2BjD2h%2BEoDkhufk%2BMl4GInWzGOI8ONyzprTTqAmZw7DiGKYsVNsGTrYcKa%2F9TELm0kc6sAYlWv3aQ7EmXcjz5zzQgzcFLTxPbZAQLx4ndHkmkyw8O1Bo%2BuCq7JLsP2ShZOyIfh6iTgOlOpLfDzl7DLLcI%2BkkZA8GuYIKd3C2QezcmJjhZTnTgdLjGVgdqatU0Mf9RVBr4suxzwzD%2BG7ciYDL%2FJLdy%2F9QwrSLW496qmbdLWgOXBKvljIZVO6CzEr90vxLt%2BY1W1mMF62FBTmAXxNNMLLGzckGOqUB7LS2RFlJFO6xg%2F%2BC0kiopna9OktKS6wZgVfGdn7kh6tfON4O9RKZppbh5jNTfEqZaQWlgEdhvKdrR%2F9Xy6M%2FkUL5iDoSI5rEyF4mQuin1SXlCurKZN9T%2B%2BwknsfyrOSs15o8YtGrzTuonGvDxD5DLLwEkHRuduBzU980n1zQzav8dunDMzbLWA5OfKZxBU%2BU3FlIGYdlIytYVPjIsBG%2FuGC2L%2FAb&X-Amz-Signature=d9bb7ec0673d061417be5139162586b872bc38faf8af9640fe9ae7cf8db1e474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

