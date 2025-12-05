---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT54H2FN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfW6U1pJFfr25HJCVfuvudTmnl5V3zankTRDem93Z7nQIgMiNmQYRVMgdHPeFVHS%2BCu12rD1dsfybguLfgX99WHPIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMbriQ1h268zMVrwDCrcAxz%2FZYy7%2BbSPzd2sOfF889K7%2BzWPoeR1EntrcBK0WM6i8G02e%2BKuue3vst0qUY%2Fze8EnOLe8AhjRd2OJBadn7YjRGdceAp3A6S1PGPvUvya%2BPaYbCpQbAErQo2BtV00IBLN%2F%2FneAR%2FUBkViqK8vzRnHSgkzle7Ylvo%2B%2Fme96teLbt4GPTlFGyVrq7O6T5HBMkVo8QdpR3NvB9Fm2zmEIxTMN2TfIscQUolnX94bg44OKH52s%2BfvB2TsvCOQTj00kH7g8GpE04kqd96n3WhElQZqocHsJrwv21hTl27laQ%2FXFymt0jLhhUvVtUeyDbemSBtq9LNcowkAZvC3XDfdvW0HrJbo0g3B3G6I0oTppMYq8JDaXg898TX9JG%2BpV%2BFxRyr8jClsf%2FESB5rMWiTI8NT7CXGAOdjMvRaUwkeh0X4XSRrj%2Bxq4cZoQ%2Blu%2BLll1Ux1%2FW6rcsO5nvCQd1aFpCeSqH22vYK3l%2FiYibLtusvSfNBXQIuiBPfqfahXt8JbumKs5EPKIX0NMOq6UcqDYbeXXPlha34j0NnNtm%2F3ehFEvCJUXJbpzrM%2Fw1HElbbSPBbxcC1R2JkbmN73%2Bxi4mQEQKvmXI%2F6A3QSYMqzQsRxnZ8ZJPwI6N0HNPziF5dMNityckGOqUBwCvoIe0TTorEkQRZYCipX%2BQYDXBuFom3bR7S9FoGAqEPXGA%2FVwKIdW1IDLQHynZFDSIaRDMmwGdphw1ZApZ1C2C%2F1evRdUEq%2BHzkZiBdalVK88U64in%2BNjtd82gmrsXqS7p84GCVYMRqn2WbgS8I4TqaLGGxq8ePvRmuGk6SNxN1p9qYlf772LgqcOsInv%2FwNJn9EFJisfCOUiDxHeqf8rzRZpu%2F&X-Amz-Signature=0a960a39685469154d26126aec1ee6e11bee98d3b495e20181f95de1f8de77b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT54H2FN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfW6U1pJFfr25HJCVfuvudTmnl5V3zankTRDem93Z7nQIgMiNmQYRVMgdHPeFVHS%2BCu12rD1dsfybguLfgX99WHPIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMbriQ1h268zMVrwDCrcAxz%2FZYy7%2BbSPzd2sOfF889K7%2BzWPoeR1EntrcBK0WM6i8G02e%2BKuue3vst0qUY%2Fze8EnOLe8AhjRd2OJBadn7YjRGdceAp3A6S1PGPvUvya%2BPaYbCpQbAErQo2BtV00IBLN%2F%2FneAR%2FUBkViqK8vzRnHSgkzle7Ylvo%2B%2Fme96teLbt4GPTlFGyVrq7O6T5HBMkVo8QdpR3NvB9Fm2zmEIxTMN2TfIscQUolnX94bg44OKH52s%2BfvB2TsvCOQTj00kH7g8GpE04kqd96n3WhElQZqocHsJrwv21hTl27laQ%2FXFymt0jLhhUvVtUeyDbemSBtq9LNcowkAZvC3XDfdvW0HrJbo0g3B3G6I0oTppMYq8JDaXg898TX9JG%2BpV%2BFxRyr8jClsf%2FESB5rMWiTI8NT7CXGAOdjMvRaUwkeh0X4XSRrj%2Bxq4cZoQ%2Blu%2BLll1Ux1%2FW6rcsO5nvCQd1aFpCeSqH22vYK3l%2FiYibLtusvSfNBXQIuiBPfqfahXt8JbumKs5EPKIX0NMOq6UcqDYbeXXPlha34j0NnNtm%2F3ehFEvCJUXJbpzrM%2Fw1HElbbSPBbxcC1R2JkbmN73%2Bxi4mQEQKvmXI%2F6A3QSYMqzQsRxnZ8ZJPwI6N0HNPziF5dMNityckGOqUBwCvoIe0TTorEkQRZYCipX%2BQYDXBuFom3bR7S9FoGAqEPXGA%2FVwKIdW1IDLQHynZFDSIaRDMmwGdphw1ZApZ1C2C%2F1evRdUEq%2BHzkZiBdalVK88U64in%2BNjtd82gmrsXqS7p84GCVYMRqn2WbgS8I4TqaLGGxq8ePvRmuGk6SNxN1p9qYlf772LgqcOsInv%2FwNJn9EFJisfCOUiDxHeqf8rzRZpu%2F&X-Amz-Signature=2cce03373fd9e10c7ecc82595ed60ad0e5f571b410cee37d54cc794cb47b41aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

