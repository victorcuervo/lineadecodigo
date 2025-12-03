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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WREPJZ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDWW5ozAYC%2Fl%2FCp3erddUPISj2eMd1kMc8RfXLPtIjkqAiARDoCHgqU%2FunW7wE8rF4QQxvFc8r17dTluTpXyGjwIwSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMzJhULsT4lKRJkjumKtwDOz%2FckrwrUcwjs7QqLpQjGzyuZmf2n7dTRUF%2FnfcBtqfJc5E9%2FdKaR2ZdDjFb%2FPl5WYLa5xQ0Alas3CEoopD%2BvAf7xvWILqpP42WNXxUIIYNPtIS9UMUy7UcfrpTRhgJW99xFSWmbI6tswXwFkq41%2FyfSkpVkmasdZFdLVYWpfyjnYRf0Ulsm1ThKAzo%2BzpEP3GmLoNmGsAelMRo099nlLWHQSnCAYTjwSz5gQIWkbholXwze%2FyVLxzcaHhr%2F3GJrm2PwxzVOch1mg1dOG%2FtSw%2B%2FClMpyXfxsvIWMm1xcpy9YwdAKvVvjdbd6f9FiaykLLlnD%2BL%2F32cOCmnFXVMJSl7A7yGhtGM0L%2BMG4aXdwHWJRXlm6A2Vl5E0%2BWhPenf6s%2Fpl8Q7JGOV7AyuhtQJAOqyKzuExYeLhEFUB%2BaxSXk8i1ApiNz2sYmV%2B2GFb8%2B0Iq7VO%2BblV7TtHueD06gAyifMCJ%2BOKjNmHdgxw6syub4JSYodkmr%2BtVmlri%2B9aIpRwpl8okMdLC8XxuNb8F4kvPvyrljEDCtd3D0S16SZLRXW3YT1XF8cHRGzn%2FJhaGsz12TrRvH6n179H055g7sfkyaxBPw7LAY1%2FIm1L1mxbJirboRyLB1kI0Te2tQJIwtabByQY6pgEOhnK7lxV%2BMZ9tg3JAw1Tp0ADOkzhyuGbhcVtyqQQJ36OOFAvl5W60Iw5%2BDU1%2F8GreaR%2FBTjnFyR1JtGxY3PxswPx4ScJ1iEY90Begyx9RMAj%2BfDaiswNDgi4MB6ajRfxXi%2FCB2C1WBH76ddwROnBe2GpuPVD7JIf31Fxa26mAQ4KS%2Bgk1qII8J4ceYST7IqFqsxrYJ9DQ%2BJf%2F1SFvsfpWCRbYnwHQ&X-Amz-Signature=c49e91432bd53963b18717d820b6634f6afab13f290beecf0c8e4f04874c8782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WREPJZ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDWW5ozAYC%2Fl%2FCp3erddUPISj2eMd1kMc8RfXLPtIjkqAiARDoCHgqU%2FunW7wE8rF4QQxvFc8r17dTluTpXyGjwIwSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMzJhULsT4lKRJkjumKtwDOz%2FckrwrUcwjs7QqLpQjGzyuZmf2n7dTRUF%2FnfcBtqfJc5E9%2FdKaR2ZdDjFb%2FPl5WYLa5xQ0Alas3CEoopD%2BvAf7xvWILqpP42WNXxUIIYNPtIS9UMUy7UcfrpTRhgJW99xFSWmbI6tswXwFkq41%2FyfSkpVkmasdZFdLVYWpfyjnYRf0Ulsm1ThKAzo%2BzpEP3GmLoNmGsAelMRo099nlLWHQSnCAYTjwSz5gQIWkbholXwze%2FyVLxzcaHhr%2F3GJrm2PwxzVOch1mg1dOG%2FtSw%2B%2FClMpyXfxsvIWMm1xcpy9YwdAKvVvjdbd6f9FiaykLLlnD%2BL%2F32cOCmnFXVMJSl7A7yGhtGM0L%2BMG4aXdwHWJRXlm6A2Vl5E0%2BWhPenf6s%2Fpl8Q7JGOV7AyuhtQJAOqyKzuExYeLhEFUB%2BaxSXk8i1ApiNz2sYmV%2B2GFb8%2B0Iq7VO%2BblV7TtHueD06gAyifMCJ%2BOKjNmHdgxw6syub4JSYodkmr%2BtVmlri%2B9aIpRwpl8okMdLC8XxuNb8F4kvPvyrljEDCtd3D0S16SZLRXW3YT1XF8cHRGzn%2FJhaGsz12TrRvH6n179H055g7sfkyaxBPw7LAY1%2FIm1L1mxbJirboRyLB1kI0Te2tQJIwtabByQY6pgEOhnK7lxV%2BMZ9tg3JAw1Tp0ADOkzhyuGbhcVtyqQQJ36OOFAvl5W60Iw5%2BDU1%2F8GreaR%2FBTjnFyR1JtGxY3PxswPx4ScJ1iEY90Begyx9RMAj%2BfDaiswNDgi4MB6ajRfxXi%2FCB2C1WBH76ddwROnBe2GpuPVD7JIf31Fxa26mAQ4KS%2Bgk1qII8J4ceYST7IqFqsxrYJ9DQ%2BJf%2F1SFvsfpWCRbYnwHQ&X-Amz-Signature=fd0637d7fec56d6c884c4b0aae568c2ee6f62e686ca81e7af7154ed3b2e757ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

