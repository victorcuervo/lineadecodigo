---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRURHTEJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkd7d6OIYtgnBTdO4Xx6uTuvGdoJIM9yxgUeaEXkoxIwIgCBPHCP5i0tbZWNZRVezEAb7MpIFDAdDCXUlV6MZv26EqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgyRnsGc25bm%2FIuMSrcA2Xhll8swLpcsTyYZgSFntt%2FmgMjnHEZGl9RPLc9NhVPfyI761buFmn4WzAx6pQIhEV5XGxuGoziHQtQSNFM7W7%2FA%2Fa1FyEjotx2OR5Fxyqbg2OG6r8itsohWtDgZXuh6Y4VvNFClwt3%2Bmb7bD2pGhpGO16WB1P%2F9D0rFt23GDrPLjE54b7eHn0g%2F3QJIZwVLncGl3lsgYREXz55bzDsb%2BqKD37RCGpyg%2FZPq6%2BmvA%2Bok5ovoysOmtxGTimxvemxobxhKeQ6S0FkEYlVUAynwY1008%2F2gBe8OldOWQKnmQi1PGgL1m78%2BrNhSgv78DodYSGwHHGuhHh56auV%2FfDMn5My%2BIJv8tyeENPjKyEblUaAAW3Lbmpmn%2BJC2a3mjOdiKL82KluOPrrZL2ZJT8SAuzOVY2zVmk%2FYmYCtDl%2BeJz1PXGAAKpd1%2B9p262d7axL3JCjVU0JbXM8JGrh2cvA1wp%2FPhAl78riH8iv9frcxLjO57HznSs28sja%2FPubYJ%2FO3%2B8SUkgsXLYV4zjjigTjEaHGcI1UFZtcOmeau7F6qCYR74frDp8lMkSJACm%2Fy%2BG5RdBpMoXLjkOwX%2Bib5%2B6fD5nK65w4LNVe3JT%2BBOOLEZUxitGvYPaBa8GeymiwjMOCh2MkGOqUBia1eBrVA4xDxC8f8dMR9KsrSVTvcZNC8oleBb9q2ucyqtlWv%2F0eCbgCOdrO9yb969cCkLE4I7UasjVbRKUNY4FO6tPYz6PLKqLVg9kpd0jAm5tBourl4f%2FA%2BaZGzlLqtvkP%2FrxIiNMzwUwPPGiQ2i8WUoHYR%2FSXPOhvb0kFlpN0ESgaZQWu1P4MdwNkgZs4JXJ95JaSV1W%2FFF7kiRVDRgCEoWc0Q&X-Amz-Signature=9033c62018c5e39309d19a9eb48938a1565a97287d99599dce34e3d49cb564dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRURHTEJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkd7d6OIYtgnBTdO4Xx6uTuvGdoJIM9yxgUeaEXkoxIwIgCBPHCP5i0tbZWNZRVezEAb7MpIFDAdDCXUlV6MZv26EqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgyRnsGc25bm%2FIuMSrcA2Xhll8swLpcsTyYZgSFntt%2FmgMjnHEZGl9RPLc9NhVPfyI761buFmn4WzAx6pQIhEV5XGxuGoziHQtQSNFM7W7%2FA%2Fa1FyEjotx2OR5Fxyqbg2OG6r8itsohWtDgZXuh6Y4VvNFClwt3%2Bmb7bD2pGhpGO16WB1P%2F9D0rFt23GDrPLjE54b7eHn0g%2F3QJIZwVLncGl3lsgYREXz55bzDsb%2BqKD37RCGpyg%2FZPq6%2BmvA%2Bok5ovoysOmtxGTimxvemxobxhKeQ6S0FkEYlVUAynwY1008%2F2gBe8OldOWQKnmQi1PGgL1m78%2BrNhSgv78DodYSGwHHGuhHh56auV%2FfDMn5My%2BIJv8tyeENPjKyEblUaAAW3Lbmpmn%2BJC2a3mjOdiKL82KluOPrrZL2ZJT8SAuzOVY2zVmk%2FYmYCtDl%2BeJz1PXGAAKpd1%2B9p262d7axL3JCjVU0JbXM8JGrh2cvA1wp%2FPhAl78riH8iv9frcxLjO57HznSs28sja%2FPubYJ%2FO3%2B8SUkgsXLYV4zjjigTjEaHGcI1UFZtcOmeau7F6qCYR74frDp8lMkSJACm%2Fy%2BG5RdBpMoXLjkOwX%2Bib5%2B6fD5nK65w4LNVe3JT%2BBOOLEZUxitGvYPaBa8GeymiwjMOCh2MkGOqUBia1eBrVA4xDxC8f8dMR9KsrSVTvcZNC8oleBb9q2ucyqtlWv%2F0eCbgCOdrO9yb969cCkLE4I7UasjVbRKUNY4FO6tPYz6PLKqLVg9kpd0jAm5tBourl4f%2FA%2BaZGzlLqtvkP%2FrxIiNMzwUwPPGiQ2i8WUoHYR%2FSXPOhvb0kFlpN0ESgaZQWu1P4MdwNkgZs4JXJ95JaSV1W%2FFF7kiRVDRgCEoWc0Q&X-Amz-Signature=b44b43ac91889babc371be41243895b2ee4f98f0c956741a164aab8b6acc2ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

