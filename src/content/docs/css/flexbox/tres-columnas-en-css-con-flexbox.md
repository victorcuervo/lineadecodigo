---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHH2DLSX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCebz%2FQn2uSWWQKrtWVHtr9%2BVh3wBfVwYewEDQhkuhmNgIgDQM4oCYM%2B7OPaArxyX5t4Q1eHv487LTeTCc9GBH3smAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDrnTXVgYve7UbJC%2FircA5rHX8%2F%2Ba0J71XptY3qJtOI8CKhEq3g730%2FJxgiRveELvr54JG2tzDtcrzEb4So9I5zgaHmhWJo1MxLaA8PBDxJvrjM0MvYkrZ54mBLaS5oW2vEBrtP%2FmKMg7JADPpHk%2FGrUBuVEDzYM6%2BauCYFzNHPD0MDBDbOpQbUPfJJlZOWYPpfIWAR5QnK%2FZsUmHZRJiN8SiwDZreap58R8MbacvRvAqHm7x54N%2BdStCWzHtG5hId82wmG9kDMknIrn6ymQUnMgZDTcFbPalBj%2FRPJxnKaHqMHgLtu9fVNpf4lVqNgdF6G4bFErBvh4QGhBca%2Byr6vKTBYslKg%2BqX%2BJDiWh7amUFmj5%2BVLkK%2FHsDSArCC9KybVtlv2u4g7cFUC9ukU%2FZqyOOI0nPbjUBoFDQ24L0ABld9sScC%2BxRjqNBN9BhTPGkWtJ50UrhJO8dMLOPOwLY3lRigp5Wltdx8CG%2Fb16ajjBBlmUZ07yynJtg3gnaOoBLo5jgcywTuHV4TEydMZ5NoXcjIO18Sm55u1zhzTGFDdBIRXMVO4otefT7n7Rm3zj3AMUSzWQHlp%2FkTU4OBwr86y7bVRHPlc%2F9ff0xGc6e%2BGOYtsrZGxmh3wofX%2BPJH4h4eWnLLfBxMWmGCS6MLWuyckGOqUB5dsA%2FUWvM7LVgl1HVm9yJoSJBI4KkbmbQPaxVLV89%2FULqDHpCb%2BUYwtespBpRxggFfgRD8Lhv%2F9xmEMzwd%2FkHNTyUkRdS6ORk%2FX3oHf5h91WXNFUjQLOpOQ2KfgjSoJ0KvMSHc6DPLcwwGv2OU2PtE2bKszmPcEhwiJSpsY7EDU5nqmr1EfIjDtssTrSSexmd8OOuqpcZk0Vd4c5Yi2oXqw7n3Ug&X-Amz-Signature=54b517acdc396265aafb01e7853653a18f1f30431e626f2a2b6683cbc886fbbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHH2DLSX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCebz%2FQn2uSWWQKrtWVHtr9%2BVh3wBfVwYewEDQhkuhmNgIgDQM4oCYM%2B7OPaArxyX5t4Q1eHv487LTeTCc9GBH3smAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDrnTXVgYve7UbJC%2FircA5rHX8%2F%2Ba0J71XptY3qJtOI8CKhEq3g730%2FJxgiRveELvr54JG2tzDtcrzEb4So9I5zgaHmhWJo1MxLaA8PBDxJvrjM0MvYkrZ54mBLaS5oW2vEBrtP%2FmKMg7JADPpHk%2FGrUBuVEDzYM6%2BauCYFzNHPD0MDBDbOpQbUPfJJlZOWYPpfIWAR5QnK%2FZsUmHZRJiN8SiwDZreap58R8MbacvRvAqHm7x54N%2BdStCWzHtG5hId82wmG9kDMknIrn6ymQUnMgZDTcFbPalBj%2FRPJxnKaHqMHgLtu9fVNpf4lVqNgdF6G4bFErBvh4QGhBca%2Byr6vKTBYslKg%2BqX%2BJDiWh7amUFmj5%2BVLkK%2FHsDSArCC9KybVtlv2u4g7cFUC9ukU%2FZqyOOI0nPbjUBoFDQ24L0ABld9sScC%2BxRjqNBN9BhTPGkWtJ50UrhJO8dMLOPOwLY3lRigp5Wltdx8CG%2Fb16ajjBBlmUZ07yynJtg3gnaOoBLo5jgcywTuHV4TEydMZ5NoXcjIO18Sm55u1zhzTGFDdBIRXMVO4otefT7n7Rm3zj3AMUSzWQHlp%2FkTU4OBwr86y7bVRHPlc%2F9ff0xGc6e%2BGOYtsrZGxmh3wofX%2BPJH4h4eWnLLfBxMWmGCS6MLWuyckGOqUB5dsA%2FUWvM7LVgl1HVm9yJoSJBI4KkbmbQPaxVLV89%2FULqDHpCb%2BUYwtespBpRxggFfgRD8Lhv%2F9xmEMzwd%2FkHNTyUkRdS6ORk%2FX3oHf5h91WXNFUjQLOpOQ2KfgjSoJ0KvMSHc6DPLcwwGv2OU2PtE2bKszmPcEhwiJSpsY7EDU5nqmr1EfIjDtssTrSSexmd8OOuqpcZk0Vd4c5Yi2oXqw7n3Ug&X-Amz-Signature=ab90db4cb4c901e3bdfaf2227f8a26460ee756928e40afc95e7fffb245cb7806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

