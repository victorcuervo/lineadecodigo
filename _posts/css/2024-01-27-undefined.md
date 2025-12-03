---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIMXXUJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCyXbzObfS%2BNADHzyraoAtx0bDTkJnl%2FYokO5pqa2aaEAIgQbb%2FJqE8QCxpSkkaC9nBCzu1pzasnDZ%2Ftl9sjzy83R0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGKJo4kjZMTPD3YaFCrcA32rhE%2F%2FLtUZ8Kx7vnGcSkXrseyU9RavH8ryz%2Bx0rZ3qd6OKVCmOOzWef%2Bf2XLVysHEeHB1XVvOn8eP%2BYLCxM21EHXx%2BuWxN8vPLRlfdoxXZycUnuTZ%2BB0c0%2FyJqJFZpEZZhOSiMerszbWZCTisqLhGPFGHUNC7qf7Ip1Dos%2FsQnYiaDCLfFxxURGTphLyKDdyqpdXGoeO%2BEUuw4bUB57EM0zb1v3nht4U1t7Qwg%2FOnfXyJsz4GUQ4fIj803A3ZpgLFLoFvGGGf5HkavGFK1gyXB%2F4nmx7GkFHLl8LjrTLw27e1WBPDqDQy%2FJL4GK5FWiwGCEItFUD3OcbHxdXbo8J6MBIrHAZjv%2Fi1m5lBA3alyNavTmzfck%2BB1eVtF5KdyKa9MvMZqS5BsEMPuBpY3LHZDM9FLza7rNKyH3s1K%2FFjb7erGkzfwXNeHsj5FBtm9FsBG8yVwjRmOGU%2FWsGXj1petfYLgKQiRiz%2BgO4Ib7ev65hafhYDdmz8LGmVDV2bMyRoHXZQ3APMCd4EZy2zGm%2FaH2z468cFtWbcXMjExzrpJx%2B6tkgEgc6DM47YQx5ELagQdksJUSlrtshlvTsmm3KRoqVOblekDFLHco%2F33azySOF5A0%2BsacJUONk5UMKKWvskGOqUBAltEfJHiRu8zH6bfWV0%2FOpQyyX0G7Th5%2FX3y8WZOcceIGpEm9lMUdVEoRShC6TrKvYgwNTAJFksT9JiHTomq6aoyCZRlMgFGgiwlEpo%2FiHLAaq3FohVwGMo%2Bmu%2FQzK5COL32wXE1mbmVY9oJEeHwoX1H8N%2BtRUfN2eDFMc1jREUJ%2BwA4fwgJ9wx8Wsm8h1%2BL%2B%2BkuEr00WBA6EloOyZUCepYeLNB7&X-Amz-Signature=2a65214df07b7a41b9b3eb72d2681ce3c3bb7b4e21e298125f6acaf592229882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIMXXUJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCyXbzObfS%2BNADHzyraoAtx0bDTkJnl%2FYokO5pqa2aaEAIgQbb%2FJqE8QCxpSkkaC9nBCzu1pzasnDZ%2Ftl9sjzy83R0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGKJo4kjZMTPD3YaFCrcA32rhE%2F%2FLtUZ8Kx7vnGcSkXrseyU9RavH8ryz%2Bx0rZ3qd6OKVCmOOzWef%2Bf2XLVysHEeHB1XVvOn8eP%2BYLCxM21EHXx%2BuWxN8vPLRlfdoxXZycUnuTZ%2BB0c0%2FyJqJFZpEZZhOSiMerszbWZCTisqLhGPFGHUNC7qf7Ip1Dos%2FsQnYiaDCLfFxxURGTphLyKDdyqpdXGoeO%2BEUuw4bUB57EM0zb1v3nht4U1t7Qwg%2FOnfXyJsz4GUQ4fIj803A3ZpgLFLoFvGGGf5HkavGFK1gyXB%2F4nmx7GkFHLl8LjrTLw27e1WBPDqDQy%2FJL4GK5FWiwGCEItFUD3OcbHxdXbo8J6MBIrHAZjv%2Fi1m5lBA3alyNavTmzfck%2BB1eVtF5KdyKa9MvMZqS5BsEMPuBpY3LHZDM9FLza7rNKyH3s1K%2FFjb7erGkzfwXNeHsj5FBtm9FsBG8yVwjRmOGU%2FWsGXj1petfYLgKQiRiz%2BgO4Ib7ev65hafhYDdmz8LGmVDV2bMyRoHXZQ3APMCd4EZy2zGm%2FaH2z468cFtWbcXMjExzrpJx%2B6tkgEgc6DM47YQx5ELagQdksJUSlrtshlvTsmm3KRoqVOblekDFLHco%2F33azySOF5A0%2BsacJUONk5UMKKWvskGOqUBAltEfJHiRu8zH6bfWV0%2FOpQyyX0G7Th5%2FX3y8WZOcceIGpEm9lMUdVEoRShC6TrKvYgwNTAJFksT9JiHTomq6aoyCZRlMgFGgiwlEpo%2FiHLAaq3FohVwGMo%2Bmu%2FQzK5COL32wXE1mbmVY9oJEeHwoX1H8N%2BtRUfN2eDFMc1jREUJ%2BwA4fwgJ9wx8Wsm8h1%2BL%2B%2BkuEr00WBA6EloOyZUCepYeLNB7&X-Amz-Signature=9f615bd092075ae2a4f2b8a912c66994234202057e5d7de4e360594ad51d5755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

