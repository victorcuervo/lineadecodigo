---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLQN73U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD%2BYgr%2FwQzzyYI%2FnC3PYyvwRIjj4E0f3YXW2KtluLC8DgIfUz1OjjihrjofBXj2DFbfk9XINKX1tS021H4LusOWtSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7Elb23ll22nic2LKtwDNhVgE2aejLBYM%2BRKtRQ%2BXsJSKD6MjHBkOoB2PAsVjTluHMTUzsu9nXYQ2RQgb2Havt1GxAH9fAj8n2VPXrgxcnYe7RqHUx01YAU8NwRbSIidhf5UlfuzTRAug6Tv1NVSB%2BUWRWYnzZFHXOoMGI5XBH0Cec6oyj3pOjQoJHfroNc0KJKq3M2ZtHv85UZQYgbDfLsEy76%2BKe3U8pvJLza6HGZSnVYrrTel%2BPFDsN5%2Fc11zpPxEsYMU34xuNZHf1PWUMtTD2BeyqlHCpTSVEGnU%2FcRMv8CX1I5xpL3GGVNX%2BuFbqWg%2BtqIqQa8I9WR0YKMJGjBIn%2Fe7LFrzdb8TcrMIPJ%2Fs%2BvDiJ%2BCddBEyrbz1zNU70oCbj20yYRHGJHNNolFbSEyvBsUhqrfYcOngnZ6JP76kqCt6iNbfpUi2Ms%2BzaW725bYM%2FGY%2BubgH4proT8dSIlYBb%2BYZQwmi%2FpQxKlyeD8xwsC1Bgq0Yyv4aGHU%2FKNdNrNadTpOSSc1HpOZfbTdm%2FS%2BcuoiBJYf9%2FSBgQaLzIBvtiV4skvhn83NuiNSm8377Wfc%2Be2yEGNjcouz2AYE%2BxdGbyD0ZWICmD4BMCogqJ8v6EDPLxPlBtjVpxfqaY2qxJJCafCHCGiyRuoUwvv3SyQY6pgFJ697et%2BlHgx0K%2FbiPbCk5MEmkB8EHadGf8OkvMUVE4drD%2FKAOIayNHQ2uN1Wrn%2BNYYntCpit9dT5omWg1a59NnOYeotl4z0L4Ec5mXC6swMWBPOamW7HEx1hycWVv7bGbE7422HJrhPHIn3m4QjESSpY94Uy%2BYMskyQzk50FKOcJpEjNl0YyC%2FFvsscsMLxiUmVGrEiyLYj8jcClRXzkx8zYbYs4W&X-Amz-Signature=429768bb9afec57d89e1365d1a90ac531e7a2675eb38b13cbb6233e72165d231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLQN73U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD%2BYgr%2FwQzzyYI%2FnC3PYyvwRIjj4E0f3YXW2KtluLC8DgIfUz1OjjihrjofBXj2DFbfk9XINKX1tS021H4LusOWtSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7Elb23ll22nic2LKtwDNhVgE2aejLBYM%2BRKtRQ%2BXsJSKD6MjHBkOoB2PAsVjTluHMTUzsu9nXYQ2RQgb2Havt1GxAH9fAj8n2VPXrgxcnYe7RqHUx01YAU8NwRbSIidhf5UlfuzTRAug6Tv1NVSB%2BUWRWYnzZFHXOoMGI5XBH0Cec6oyj3pOjQoJHfroNc0KJKq3M2ZtHv85UZQYgbDfLsEy76%2BKe3U8pvJLza6HGZSnVYrrTel%2BPFDsN5%2Fc11zpPxEsYMU34xuNZHf1PWUMtTD2BeyqlHCpTSVEGnU%2FcRMv8CX1I5xpL3GGVNX%2BuFbqWg%2BtqIqQa8I9WR0YKMJGjBIn%2Fe7LFrzdb8TcrMIPJ%2Fs%2BvDiJ%2BCddBEyrbz1zNU70oCbj20yYRHGJHNNolFbSEyvBsUhqrfYcOngnZ6JP76kqCt6iNbfpUi2Ms%2BzaW725bYM%2FGY%2BubgH4proT8dSIlYBb%2BYZQwmi%2FpQxKlyeD8xwsC1Bgq0Yyv4aGHU%2FKNdNrNadTpOSSc1HpOZfbTdm%2FS%2BcuoiBJYf9%2FSBgQaLzIBvtiV4skvhn83NuiNSm8377Wfc%2Be2yEGNjcouz2AYE%2BxdGbyD0ZWICmD4BMCogqJ8v6EDPLxPlBtjVpxfqaY2qxJJCafCHCGiyRuoUwvv3SyQY6pgFJ697et%2BlHgx0K%2FbiPbCk5MEmkB8EHadGf8OkvMUVE4drD%2FKAOIayNHQ2uN1Wrn%2BNYYntCpit9dT5omWg1a59NnOYeotl4z0L4Ec5mXC6swMWBPOamW7HEx1hycWVv7bGbE7422HJrhPHIn3m4QjESSpY94Uy%2BYMskyQzk50FKOcJpEjNl0YyC%2FFvsscsMLxiUmVGrEiyLYj8jcClRXzkx8zYbYs4W&X-Amz-Signature=51855ed906ad13c50cc7665041b266952ed4f9a16bb71f6562fdf49ef0d4f1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

